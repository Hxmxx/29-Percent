import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  position: relative;
`;

export const Trigger = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 500;
  gap: 8px;
  
  &:hover {
    background: ${({ theme }) => theme.colors.gray[100]};
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  min-width: 180px;
  padding: 8px;
  background: ${({ theme }) => theme.colors.background.paper};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.md};
  animation: ${slideDown} 0.2s ease-out;
  transform-origin: top;
`;

export const MenuItemButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background: ${({ theme }) => theme.colors.gray[100]};
  }
`;

export const MenuItemLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 14px;
  text-decoration: none;
  
  &:hover {
    background: ${({ theme }) => theme.colors.gray[100]};
  }
`;

export const Divider = styled.hr`
  margin: 8px 0;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
`; 