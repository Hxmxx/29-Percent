import { useState, useRef, useEffect } from 'react';
import { CaretUp, CaretDown } from '@phosphor-icons/react';
import * as S from './styles';

interface DropdownProps {
  userName: string;
  onLogout: () => void;
}

export const Dropdown = ({ userName, onLogout }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <S.Container ref={dropdownRef}>
      <S.Trigger onClick={() => setIsOpen(!isOpen)}>
        <span>{userName}</span>
        {isOpen ? <CaretUp size={16} /> : <CaretDown size={16} />}
      </S.Trigger>
      
      {isOpen && (
        <S.Menu>
          <S.MenuItemLink to="/profile">프로필</S.MenuItemLink>
          <S.MenuItemLink to="/settings">설정</S.MenuItemLink>
          <S.Divider />
          <S.MenuItemButton onClick={onLogout}>
            로그아웃
          </S.MenuItemButton>
        </S.Menu>
      )}
    </S.Container>
  );
}; 