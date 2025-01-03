import { InputHTMLAttributes } from 'react';
import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helper?: string;
  error?: { isValid: boolean; message: string };
  fullWidth?: boolean;
}

export const Input = ({ label, helper, error, fullWidth = false, ...props }: InputProps) => {
  return (
    <S.Container fullWidth={fullWidth}>
      {label && <S.Label>{label}</S.Label>}
      <S.Input 
        hasError={error?.isValid === false}
        isValid={error?.isValid === true}
        {...props} 
      />
      {(helper || error?.message) && (
        <S.HelperText 
          hasError={error?.isValid === false}
          isValid={error?.isValid === true}
        >
          {error?.message || helper}
        </S.HelperText>
      )}
    </S.Container>
  );
}; 