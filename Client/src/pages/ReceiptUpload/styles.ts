import styled from 'styled-components';

export const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 32px;
`;

export const SubTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
`;

export const PreviewSection = styled.div`
  background: ${({ theme }) => theme.colors.background.paper};
  border-radius: 12px;
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  margin-top: 24px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const PreviewImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 16px;
`;

export const PreviewInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.gray[50]};
  border-radius: 8px;
  margin-top: 16px;
`;

export const PreviewFileName = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const PreviewFileSize = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`; 