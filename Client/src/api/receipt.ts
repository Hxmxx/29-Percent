import { client } from './client';

interface UploadResponse {
  fileId: string;
}

interface ProcessStatusResponse {
  status: 'uploading' | 'processing' | 'completed' | 'error';
  progress: number;
  result?: {
    text: string;
    amount: number;
    date: string;
    vendor: string;
  };
}

export const receiptApi = {
  // 파일 업로드
  upload: async (file: File, onProgress?: (progress: number) => void) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await client.post<UploadResponse>('/receipts/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (progressEvent.total) {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          onProgress?.(progress);
        }
      },
    });
    return response.data;
  },

  // OCR 처리 시작
  startProcessing: async (fileId: string) => {
    await client.post(`/receipts/${fileId}/process`);
  },

  // 처리 상태 확인
  getStatus: async (fileId: string) => {
    const response = await client.get<ProcessStatusResponse>(`/receipts/${fileId}/status`);
    return response.data;
  }
}; 