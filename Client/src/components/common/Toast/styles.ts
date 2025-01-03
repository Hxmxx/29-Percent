import styled, { css, keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: none;
`;

export const Toast = styled.div<{
  type: 'success' | 'error' | 'info';
  isVisible: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.background.default};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  pointer-events: auto;
  animation: ${({ isVisible }) =>
    isVisible
      ? css`${slideIn} 0.2s ease-out forwards`
      : css`${slideOut} 0.2s ease-out forwards`};

  ${({ type, theme }) => {
    switch (type) {
      case 'success':
        return css`
          color: ${theme.colors.success};
          border: 1px solid ${theme.colors.success}20;
        `;
      case 'error':
        return css`
          color: ${theme.colors.error};
          border: 1px solid ${theme.colors.error}20;
        `;
      default:
        return css`
          color: ${theme.colors.primary.main};
          border: 1px solid ${theme.colors.primary.main}20;
        `;
    }
  }}
`;

export const Message = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 15px;
  font-weight: 500;
`; 