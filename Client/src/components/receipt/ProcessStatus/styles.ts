import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background.paper};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;
  padding: 16px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const FileName = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const StatusText = styled.span<{ $status: string }>`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: ${({ theme, $status }) => 
    $status === 'completed' ? theme.colors.success :
    $status === 'error' ? theme.colors.error :
    theme.colors.text.secondary};

  svg {
    width: 16px;
    height: 16px;
  }
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