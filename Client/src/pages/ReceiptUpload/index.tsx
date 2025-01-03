import { useState } from 'react';
import { Stack } from '../../components/common/Stack';
import { FileUploader } from '../../components/receipt/FileUploader';
import { ProcessStatus } from '../../components/receipt/ProcessStatus';
import { ReceiptPreview } from '../../components/receipt/ReceiptPreview';
import { receiptApi } from '../../api/receipt';
import * as S from './styles';

interface UploadedFile {
  id: string;
  file: File;
  preview: string;
  status: 'uploading' | 'processing' | 'completed' | 'error';
  progress: number;
  result?: {
    text: string;
    amount: number;
    date: string;
    vendor: string;
  };
}

export const ReceiptUpload = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);

  const handleFileUpload = async (uploadedFiles: FileList) => {
    // 파일 목록에 추가
    const newFiles = Array.from(uploadedFiles).map(file => ({
      id: crypto.randomUUID(),
      file,
      preview: URL.createObjectURL(file),
      status: 'uploading' as const,
      progress: 0
    }));

    setFiles(prev => [...prev, ...newFiles]);

    // 각 파일 처리
    for (const newFile of newFiles) {
      try {
        // 1. 파일 업로드
        const { fileId } = await receiptApi.upload(
          newFile.file,
          (progress) => {
            setFiles(prev => prev.map(file => 
              file.id === newFile.id ? { ...file, progress } : file
            ));
          }
        );

        // 2. OCR 처리 시작
        setFiles(prev => prev.map(file => 
          file.id === newFile.id ? { ...file, status: 'processing', progress: 100 } : file
        ));
        
        await receiptApi.startProcessing(fileId);

        // 3. 처리 상태 주기적 확인
        const checkStatus = async () => {
          const status = await receiptApi.getStatus(fileId);
          
          setFiles(prev => prev.map(file => 
            file.id === newFile.id 
              ? { 
                  ...file, 
                  status: status.status,
                  progress: status.progress,
                  result: status.result
                } 
              : file
          ));

          if (status.status === 'processing') {
            setTimeout(checkStatus, 1000);
          }
        };

        checkStatus();

      } catch (error) {
        setFiles(prev => prev.map(file => 
          file.id === newFile.id ? { ...file, status: 'error' } : file
        ));
        console.error('Upload failed:', error);
      }
    }
  };

  return (
    <Stack gap={24}>
      <S.Title>영수증 업로드</S.Title>
      
      <S.Container>
        <Stack gap={32}>
          <FileUploader onFileUpload={handleFileUpload} />
          
          {files.length > 0 && (
            <Stack gap={16}>
              <S.SubTitle>업로드된 영수증</S.SubTitle>
              {files.map(file => (
                <ProcessStatus
                  key={file.id}
                  fileName={file.file.name}
                  status={file.status}
                  progress={file.progress}
                />
              ))}
            </Stack>
          )}
        </Stack>

        {files.length > 0 && (
          <S.PreviewSection>
            <S.SubTitle>미리보기</S.SubTitle>
            <ReceiptPreview files={files} />
          </S.PreviewSection>
        )}
      </S.Container>
    </Stack>
  );
}; 