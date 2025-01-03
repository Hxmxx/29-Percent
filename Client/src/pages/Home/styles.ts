import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Hero = styled.section`
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 48px 24px;
  position: relative;
`;

export const GradientText = styled.h1`
  font-size: 64px;
  font-weight: 700;
  line-height: 1.2;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary.main} 0%,
    ${({ theme }) => theme.colors.primary.dark} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 40px;
  }
`;

export const SubTitle = styled.div`
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text.secondary};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 18px;
  }
`;

export const BackgroundGradient = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  background: radial-gradient(
    circle at center,
    ${({ theme }) => theme.colors.primary.light}20 0%,
    transparent 70%
  );
  z-index: -1;
  animation: pulse 10s ease-in-out infinite;

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`; 