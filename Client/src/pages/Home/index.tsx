import * as S from './styles';
import { Button } from '../../components/common/Button/index';
import { Flex } from '../../components/common/Flex/index';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleStartClick = () => {
    if (isAuthenticated) {
      navigate('/receipts/upload');
    } else {
      navigate('/login');
    }
  };

  return (
    <S.Container>
      <S.Hero>
        <Flex direction="column" gap={32} align="center">
          <S.GradientText>
            세금 걱정없이<br />
            사업에만 집중하세요
          </S.GradientText>
          <S.SubTitle>
            프리랜서와 사업자를 위한<br />
            똑똑한 세금 관리 서비스
          </S.SubTitle>
          <Flex gap={16}>
            <Button 
              size="large"
              onClick={handleStartClick}
            >
              {isAuthenticated ? '영수증 업로드' : '무료로 시작하기'}
            </Button>
            {!isAuthenticated && (
              <Button 
                variant="ghost"
                size="large"
                onClick={() => navigate('/login')}
              >
                로그인
              </Button>
            )}
          </Flex>
        </Flex>
        <S.BackgroundGradient />
      </S.Hero>
    </S.Container>
  );
}; 