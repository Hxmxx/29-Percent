import styled from 'styled-components';

export const FilterButton = styled.button<{ $isActive: boolean }>`
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  background: ${({ theme, $isActive }) => 
    $isActive ? theme.colors.primary.main : theme.colors.background.paper};
  color: ${({ theme, $isActive }) => 
    $isActive ? theme.colors.background.paper : theme.colors.text.primary};
  border: 1px solid ${({ theme, $isActive }) => 
    $isActive ? theme.colors.primary.main : theme.colors.gray[200]};
  transition: all 0.2s ease;

  &:not(:last-child) {
    margin-right: 8px;
  }

  &:hover {
    background: ${({ theme, $isActive }) => 
      $isActive ? theme.colors.primary.dark : theme.colors.gray[100]};
  }
`; 