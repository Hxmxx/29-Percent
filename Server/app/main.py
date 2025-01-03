import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from .database import engine, Base
from .config import settings
from .routers import auth, receipt

# 데이터베이스 테이블 생성
Base.metadata.create_all(bind=engine)

# uploads 디렉토리 생성
os.makedirs(settings.UPLOAD_DIR, exist_ok=True)

app = FastAPI(title="29% API")

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 정적 파일 제공 (업로드된 파일)
app.mount("/uploads", StaticFiles(directory=settings.UPLOAD_DIR), name="uploads")

# 라우터 등록
app.include_router(auth.router, prefix="/api/v1")
app.include_router(receipt.router, prefix="/api/v1")

@app.get("/health")
async def health_check():
    return {"status": "ok"} 