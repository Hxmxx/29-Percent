import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  background: ${({ theme }) => theme.colors.background.paper};
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const Title = styled.h3`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const TooltipContainer = styled.div`
  background: ${({ theme }) => theme.colors.background.paper};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;
  padding: 12px;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const TooltipLabel = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 14px;
  margin-bottom: 4px;
`;

export const TooltipValue = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 16px;
  font-weight: 600;
`; 