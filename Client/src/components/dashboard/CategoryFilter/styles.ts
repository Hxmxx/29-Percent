import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const FilterButton = styled.button<{ $isActive: boolean }>`
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 14px;
  background: ${({ theme, $isActive }) => 
    $isActive ? theme.colors.primary.main : theme.colors.background.paper};
  color: ${({ theme, $isActive }) => 
    $isActive ? theme.colors.background.paper : theme.colors.text.primary};
  border: 1px solid ${({ theme, $isActive }) => 
    $isActive ? theme.colors.primary.main : theme.colors.gray[200]};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme, $isActive }) => 
      $isActive ? theme.colors.primary.dark : theme.colors.gray[100]};
  }
`; 