from sqlalchemy import Column, String, Integer, DateTime, ForeignKey, JSON
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from ..database import Base

class Receipt(Base):
    __tablename__ = "receipts"

    id = Column(String, primary_key=True)
    user_id = Column(String, ForeignKey("users.id"))
    file_path = Column(String)
    original_filename = Column(String)
    file_size = Column(Integer)
    ocr_data = Column(JSON, nullable=True)  # OCR 결과 저장
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # 관계 설정
    user = relationship("User", back_populates="receipts") 