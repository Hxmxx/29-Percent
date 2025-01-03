import { HiCheck, HiX } from 'react-icons/hi';
import * as S from './styles';

interface ProcessStatusProps {
  fileName: string;
  status: 'uploading' | 'processing' | 'completed' | 'error';
  progress: number;
}

export const ProcessStatus = ({ fileName, status, progress }: ProcessStatusProps) => {
  const statusText = {
    uploading: '업로드 중...',
    processing: 'OCR 처리 중...',
    completed: '완료',
    error: '오류'
  };

  return (
    <S.Container>
      <S.Content>
        <S.FileName>{fileName}</S.FileName>
        <S.StatusText $status={status}>
          {statusText[status]}
          {status === 'completed' && <HiCheck />}
          {status === 'error' && <HiX />}
        </S.StatusText>
      </S.Content>
      {(status === 'uploading' || status === 'processing') && (
        <S.ProgressBar>
          <S.Progress $progress={progress} />
        </S.ProgressBar>
      )}
    </S.Container>
  );
}; 