# Receipt OCR API Server

영수증 이미지를 업로드하면 OCR로 텍스트를 추출하고 분석하는 API 서버입니다.

## 기술 스택

- FastAPI
- SQLAlchemy
- EasyOCR
- SQLite
- Python 3.9+

## 설치 방법

1. 가상환경 생성 및 활성화
```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

2. 의존성 설치
```bash
pip install -r requirements.txt
```

3. 환경 변수 설정
```bash
cp .env.example .env
# .env 파일을 열어서 필요한 설정 입력
```

4. 서버 실행
```bash
uvicorn app.main:app --reload
```

## API 엔드포인트

- `POST /api/v1/auth/register`: 회원가입
- `POST /api/v1/auth/login`: 로그인
- `POST /api/v1/receipts/upload`: 영수증 이미지 업로드
- `GET /api/v1/receipts`: 영수증 목록 조회
- `GET /api/v1/receipts/{receipt_id}`: 영수증 상세 조회
