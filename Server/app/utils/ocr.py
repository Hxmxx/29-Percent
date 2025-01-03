import easyocr
import numpy as np
import cv2
from PIL import Image
import io
import logging
import re
from datetime import datetime

# 로깅 설정
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class OCRProcessor:
    def __init__(self):
        logger.info("OCR 모델 로딩 시작...")
        try:
            # GPU 사용하지 않도록 설정
            self.reader = easyocr.Reader(['ko', 'en'], gpu=False)
            logger.info("OCR 모델 로딩 완료!")
        except Exception as e:
            logger.error(f"OCR 모델 로딩 실패: {str(e)}")
            raise e
    
    def preprocess_image(self, image_path: str):
        """이미지 전처리"""
        # 이미지 읽기
        image = cv2.imread(image_path)
        
        # 크기 조정 (해상도 증가)
        height, width = image.shape[:2]
        image = cv2.resize(image, (width*2, height*2), interpolation=cv2.INTER_CUBIC)
        
        # 그레이스케일 변환
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        
        # 노이즈 제거
        denoised = cv2.fastNlMeansDenoising(gray)
        
        # 대비 향상
        clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))
        enhanced = clahe.apply(denoised)
        
        # 이진화
        _, binary = cv2.threshold(enhanced, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
        
        # 임시 파일로 저장
        temp_path = image_path + '_processed.jpg'
        cv2.imwrite(temp_path, binary)
        
        return temp_path
    
    def clean_text(self, text: str) -> str:
        """텍스트 정제"""
        # 숫자와 비슷하게 생긴 문자들 변환
        replacements = {
            'l': '1',
            'I': '1',
            'O': '0',
            'o': '0',
            'B': '8',
            'g': '9',
            '.': ',',
            ' ': '',
            't': '7',
            'T': '7',
            'S': '5',
            's': '5',
            'G': '6',
            'g': '9'
        }
        
        # 텍스트 정제
        cleaned = text
        for old, new in replacements.items():
            cleaned = cleaned.replace(old, new)
        
        # 숫자 사이의 쉼표가 아닌 문자 제거
        cleaned = re.sub(r'[^0-9,]', '', cleaned)
        
        logger.info(f"텍스트 정제: {text} -> {cleaned}")
        return cleaned

    def extract_amounts(self, text: str) -> list:
        """금액 추출"""
        logger.info(f"금액 추출 시도 (원본): {text}")
        
        # 금액이 아닌 것으로 보이는 패턴이 있으면 제외
        skip_patterns = [
            '카드', '번호', '사업자', '전화', '일시', '승인',
            '단말기', '표번호', '**', '/', '-', ';'
        ]
        if any(x in text for x in skip_patterns):
            return []
        
        # 텍스트 정제
        cleaned = self.clean_text(text)
        if not cleaned:  # 정제 후 빈 문자열이면 스킵
            return []
        
        amounts = []
        
        # 1. 쉼표가 있는 금액 패턴 (예: "6,818")
        comma_pattern = r'(\d{1,3},\d{3})'
        matches = re.findall(comma_pattern, cleaned)
        for match in matches:
            try:
                amount = int(match.replace(',', ''))
                if 100 <= amount <= 100000:
                    amounts.append(amount)
                    logger.info(f"쉼표 패턴 금액 추출: {amount} from {match}")
            except ValueError:
                continue
        
        # 2. 3~4자리 숫자 패턴 (예: "682" 또는 "7500")
        if not amounts:  # 쉼표 패턴에서 금액을 찾지 못한 경우
            digit_pattern = r'(?<!\d)(\d{3,4})(?!\d)'
            matches = re.findall(digit_pattern, cleaned)
            for match in matches:
                try:
                    amount = int(match)
                    if 100 <= amount <= 100000:
                        amounts.append(amount)
                        logger.info(f"숫자 패턴 금액 추출: {amount} from {match}")
                except ValueError:
                    continue
        
        return amounts

    def extract_date(self, text: str) -> str:
        """날짜 추출"""
        # YYYY/MM/DD 형식 찾기
        date_pattern = r'\d{4}/\d{2}/\d{2}'
        match = re.search(date_pattern, text)
        if match:
            return match.group()
        return None

    def process_image(self, image_path: str):
        """이미지에서 텍스트를 추출합니다."""
        try:
            logger.info(f"이미지 처리 시작: {image_path}")
            
            processed_path = self.preprocess_image(image_path)
            result = self.reader.readtext(processed_path)
            
            extracted_data = {
                'full_text': [],
                'store_name': None,
                'date': None,
                'subtotal': None,    # 공급가액
                'tax': None,         # 부가가치세
                'total': None,       # 합계
                'raw_amounts': [],   # 디버깅용
                'all_amounts': []    # 디버깅용
            }
            
            next_is_store_name = False
            amounts = []
            
            for detection in result:
                text = detection[1]
                extracted_data['full_text'].append(text)
                
                # 가맹점명 추출
                if '가맹점' in text or '가맣점' in text:
                    next_is_store_name = True
                elif next_is_store_name and len(text) > 3:
                    extracted_data['store_name'] = text.strip()
                    next_is_store_name = False
                
                # 금액 추출
                found_amounts = self.extract_amounts(text)
                if found_amounts:
                    amounts.extend(found_amounts)
                    extracted_data['raw_amounts'].append(text)
            
            # 금액 분류 (중복 제거 및 정렬)
            if amounts:
                amounts = sorted(list(set(amounts)))
                extracted_data['all_amounts'] = amounts  # 디버깅용
                logger.info(f"추출된 모든 금액: {amounts}")
                
                if len(amounts) >= 3:
                    extracted_data['tax'] = amounts[0]       # 가장 작은 금액 (682원)
                    extracted_data['subtotal'] = amounts[1]  # 중간 금액 (6,818원)
                    extracted_data['total'] = amounts[2]     # 가장 큰 금액 (7,500원)
                elif len(amounts) == 2:
                    extracted_data['subtotal'] = amounts[0]
                    extracted_data['total'] = amounts[1]
                elif len(amounts) == 1:
                    extracted_data['total'] = amounts[0]
            
            logger.info(f"추출된 데이터: {extracted_data}")
            return extracted_data
            
        except Exception as e:
            logger.error(f"OCR 처리 중 에러 발생: {str(e)}")
            return None

# 싱글톤 인스턴스 생성
ocr_processor = OCRProcessor() 