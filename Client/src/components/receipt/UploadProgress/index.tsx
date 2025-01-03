import * as S from './styles';

interface UploadProgressProps {
  progress: number;
  fileName: string;
}

export const UploadProgress = ({ progress, fileName }: UploadProgressProps) => {
  return (
    <S.Container>
      <S.ProgressBar>
        <S.Progress $progress={progress} />
      </S.ProgressBar>
      <S.Status>
        {progress < 100 
          ? `${fileName} 업로드 중... ${progress}%`
          : `${fileName} 업로드 완료!`}
      </S.Status>
    </S.Container>
  );
}; 