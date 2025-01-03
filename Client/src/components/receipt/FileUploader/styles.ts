import styled from 'styled-components';

interface ContainerProps {
  $isDragActive?: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 80px;
  margin: 40px 0;
  background: ${({ theme }) => theme.colors.background.paper};
  border: 2px dashed ${({ theme, $isDragActive }) => 
    $isDragActive ? theme.colors.primary.main : theme.colors.gray[200]};
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: scale(${({ $isDragActive }) => $isDragActive ? 1.02 : 1});

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.main};
    background: ${({ theme }) => theme.colors.gray[50]};
  }
`;

export const Icon = styled.div`
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.gray[400]};
  svg {
    width: 48px;
    height: 48px;
  }
`;

export const Text = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 24px;
`;

export const SubText = styled.p`
  margin: 12px 0 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 20px;
`; 