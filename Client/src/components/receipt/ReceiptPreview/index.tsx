import * as S from './styles';

interface ReceiptPreviewProps {
  files: Array<{
    id: string;
    preview: string;
  }>;
}

export const ReceiptPreview = ({ files }: ReceiptPreviewProps) => {
  return (
    <S.Container>
      {files.map(file => (
        <S.PreviewImage 
          key={file.id} 
          src={file.preview} 
          alt="영수증 미리보기" 
        />
      ))}
    </S.Container>
  );
}; 