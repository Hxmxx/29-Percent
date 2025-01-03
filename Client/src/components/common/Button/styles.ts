import styled, { css } from 'styled-components';

export const Button = styled.button<{
  $variant: 'primary' | 'secondary' | 'ghost';
  $size: 'small' | 'medium' | 'large';
  $fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return css`
          height: 32px;
          padding: 0 12px;
          font-size: 14px;
        `;
      case 'large':
        return css`
          height: 48px;
          padding: 0 24px;
          font-size: 16px;
        `;
      default:
        return css`
          height: 40px;
          padding: 0 16px;
          font-size: 15px;
        `;
    }
  }}

  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'secondary':
        return css`
          background: ${theme.colors.secondary.light};
          color: ${theme.colors.secondary.main};

          &:hover {
            background: ${theme.colors.secondary.dark}15;
          }

          &:disabled {
            background: ${theme.colors.background.disabled};
            color: ${theme.colors.text.disabled};
            cursor: not-allowed;
          }
        `;
      case 'ghost':
        return css`
          background: transparent;
          color: ${theme.colors.text.primary};

          &:hover {
            background: ${theme.colors.gray[100]};
          }

          &:disabled {
            color: ${theme.colors.text.disabled};
            cursor: not-allowed;
          }
        `;
      default:
        return css`
          background: ${theme.colors.primary.main};
          color: white;

          &:hover {
            background: ${theme.colors.primary.dark};
          }

          &:disabled {
            background: ${theme.colors.background.disabled};
            color: ${theme.colors.text.disabled};
            cursor: not-allowed;
          }
        `;
    }
  }}
`;