import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 2px;
  overflow: hidden;
`;

export const Progress = styled.div<{ $progress: number }>`
  width: ${({ $progress }) => $progress}%;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary.main};
  transition: width 0.3s ease;
`;

export const Status = styled.p`
  margin: 8px 0 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`; 