import styled from 'styled-components';

export const Container = styled.div<{ fullWidth: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 14px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input<{ hasError?: boolean; isValid?: boolean }>`
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${({ theme, hasError, isValid }) => {
    if (hasError) return theme.colors.error;
    if (isValid) return theme.colors.success;
    return theme.colors.gray[200];
  }};
  background: ${({ theme }) => theme.colors.background.default};
  font-size: 16px;
  transition: all 0.2s ease;
  color: ${({ theme }) => theme.colors.text.primary};

  &:focus {
    border-color: ${({ theme, hasError, isValid }) => {
      if (hasError) return theme.colors.error;
      if (isValid) return theme.colors.success;
      return theme.colors.primary.main;
    }};
    background: ${({ theme }) => theme.colors.background.paper};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.background.disabled};
    color: ${({ theme }) => theme.colors.text.disabled};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  @media (hover: hover) {
    &:hover:not(:disabled) {
      border-color: ${({ theme, hasError }) => 
        hasError ? theme.colors.error : theme.colors.gray[400]};
    }
  }
`;

export const HelperText = styled.span<{ hasError?: boolean; isValid?: boolean }>`
  font-size: 14px;
  color: ${({ theme, hasError, isValid }) => {
    if (hasError) return theme.colors.error;
    if (isValid) return theme.colors.success;
    return theme.colors.text.secondary;
  }};
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`; 