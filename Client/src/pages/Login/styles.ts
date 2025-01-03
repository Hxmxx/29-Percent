import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: linear-gradient(135deg,
    ${({ theme }) => theme.colors.primary.light}20 0%,
    ${({ theme }) => theme.colors.background.paper} 100%
  );
`;

export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 48px 32px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.background.default};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 32px 24px;
  }
`; 