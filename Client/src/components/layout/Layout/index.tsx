import { Header } from '../Header';
import { Footer } from '../Footer';
import * as S from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Container>
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.Container>
  );
}; 