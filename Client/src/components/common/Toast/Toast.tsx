import { useEffect, useState } from 'react';
import * as S from './styles';
import { CheckCircle, XCircle, Info } from '@phosphor-icons/react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

export const Toast = ({ message, type, onClose }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 200); // 애니메이션 완료 후 제거
    }, 2800);

    return () => clearTimeout(timer);
  }, [onClose]);

  const Icon = {
    success: CheckCircle,
    error: XCircle,
    info: Info
  }[type];

  return (
    <S.Toast type={type} isVisible={isVisible}>
      <Icon size={20} weight="fill" />
      <S.Message>{message}</S.Message>
    </S.Toast>
  );
}; 