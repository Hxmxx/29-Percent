import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { HiUpload } from 'react-icons/hi';
import { UploadProgress } from '../UploadProgress';
import * as S from './styles';

interface FileUploaderProps {
  onFileUpload: (files: FileList) => Promise<void>;
}

export const FileUploader = ({ onFileUpload }: FileUploaderProps) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [currentFile, setCurrentFile] = useState<File | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const fileList = Object.assign(new DataTransfer().files, acceptedFiles);
    await onFileUpload(fileList);
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
      'application/pdf': ['.pdf']
    },
    maxFiles: 1
  });

  return (
    <div>
      <S.Container {...getRootProps()} $isDragActive={isDragActive}>
        <input {...getInputProps()} />
        <S.Icon>
          <HiUpload />
        </S.Icon>
        <S.Text>
          {isDragActive
            ? '여기에 파일을 놓아주세요'
            : '영수증 이미지를 드래그하거나 클릭하여 업로드하세요'}
        </S.Text>
        <S.SubText>
          지원 형식: JPG, PNG, PDF
        </S.SubText>
      </S.Container>
      {currentFile && uploadProgress > 0 && (
        <UploadProgress 
          progress={uploadProgress}
          fileName={currentFile.name}
        />
      )}
    </div>
  );
}; 