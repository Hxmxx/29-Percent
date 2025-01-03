import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 16px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.background.paper};
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primary.light};
  color: ${({ theme }) => theme.colors.primary.main};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 14px;
`;

export const Value = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 24px;
  font-weight: 600;
`;

export const Trend = styled.div<{ $isPositive: boolean }>`
  color: ${({ theme, $isPositive }) => 
    $isPositive ? theme.colors.success : theme.colors.error};
  font-size: 14px;
  font-weight: 500;
`; 