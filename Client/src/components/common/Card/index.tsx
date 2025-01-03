import styled from 'styled-components';

export const Card = styled.div`
  padding: 32px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.background.default};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.2s ease;
  min-width: 280px;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`; 