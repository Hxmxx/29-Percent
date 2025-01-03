import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { Button } from '../../common/Button/index';
import { useTheme } from '../../../contexts/ThemeContext';
import { Moon, Sun } from '@phosphor-icons/react';
import { useAuth } from '../../../contexts/AuthContext';
import { Dropdown } from '../../common/Dropdown/index';

export const Header = () => {
  const navigate = useNavigate();
  const { themeMode, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  
  return (
    <S.Header>
        <S.Content>
            <S.LeftNav>
                <S.Logo to="/">29%</S.Logo>
            </S.LeftNav>
        
            <S.CenterNav>
                <S.NavLink to="/dashboard">대시보드</S.NavLink>
                <S.NavLink to="/receipts/upload">영수증 업로드</S.NavLink>
                {/* <S.NavLink to="/notice">공지사항</S.NavLink>
                <S.NavLink to="/support">고객센터</S.NavLink> */}
            </S.CenterNav>
            <S.RightNav>
            <S.ThemeToggle onClick={toggleTheme}>
                {themeMode === 'light' ? (
                <Moon size={24} weight="fill" />
                ) : (
                <Sun size={24} weight="fill" />
                )}
            </S.ThemeToggle>
            {user ? (
                <Dropdown 
                userName={user.name} 
                onLogout={() => {
                    logout();
                    navigate('/');
                }} 
                />
            ) : (
                <Button 
                variant="ghost" 
                size="medium"
                onClick={() => navigate('/login')}
                >
                로그인
                </Button>
            )}
            </S.RightNav>
        </S.Content>
        </S.Header>
    );
}; 