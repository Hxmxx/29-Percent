from pydantic import BaseModel
from datetime import datetime
from typing import Optional, Dict, Any, List

class ReceiptBase(BaseModel):
    original_filename: str
    file_size: int

class ReceiptCreate(ReceiptBase):
    file_path: str
    user_id: str

class ReceiptResponse(ReceiptBase):
    id: str
    file_path: str
    ocr_data: Optional[Dict[str, Any]] = None
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True 