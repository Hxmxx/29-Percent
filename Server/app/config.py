from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # 데이터베이스 설정
    DATABASE_URL: str = "sqlite:///./app.db"
    
    # JWT 설정
    JWT_SECRET: str = "your-secret-key"  # 실제로는 환경변수로 관리해야 함
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24  # 24시간
    
    # 파일 업로드 설정
    UPLOAD_DIR: str = "uploads"
    
    # CORS 설정
    CORS_ORIGINS: list = ["http://localhost:5173"]
    
    class Config:
        env_file = ".env"

settings = Settings() 