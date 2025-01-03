from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from sqlalchemy.orm import Session
from ..database import get_db
from ..models.receipt import Receipt
from ..schemas.receipt import ReceiptResponse
from ..utils.auth import get_current_user
from ..utils.ocr import ocr_processor
from ..models.user import User
import uuid
import os
from ..config import settings

router = APIRouter(prefix="/receipts", tags=["receipts"])

@router.post("/upload", response_model=ReceiptResponse)
async def upload_receipt(
    file: UploadFile = File(...),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    # 업로드 디렉토리 생성
    os.makedirs(settings.UPLOAD_DIR, exist_ok=True)
    
    # 파일 저장
    file_id = str(uuid.uuid4())
    extension = os.path.splitext(file.filename)[1]
    file_path = os.path.join(settings.UPLOAD_DIR, f"{file_id}{extension}")
    
    with open(file_path, "wb") as buffer:
        content = await file.read()
        buffer.write(content)
    
    # OCR 처리
    ocr_result = ocr_processor.process_image(file_path)
    
    # DB에 저장
    receipt = Receipt(
        id=file_id,
        user_id=current_user.id,
        file_path=file_path,
        original_filename=file.filename,
        file_size=len(content),
        ocr_data=ocr_result  # OCR 결과 저장
    )
    
    db.add(receipt)
    db.commit()
    db.refresh(receipt)
    
    return receipt 