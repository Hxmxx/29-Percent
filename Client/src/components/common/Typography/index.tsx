import styled, { css } from 'styled-components';

// 제목용 Typography
export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
  line-height: ${({ theme }) => theme.typography.h1.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
  line-height: ${({ theme }) => theme.typography.h2.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const H3 = styled.h3`
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
  line-height: ${({ theme }) => theme.typography.h3.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

// 본문용 Typography
export const Body1 = styled.p`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Body2 = styled.p`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2.fontWeight};
  line-height: ${({ theme }) => theme.typography.body2.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

// 캡션용 Typography
export const Caption = styled.span`
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  font-weight: ${({ theme }) => theme.typography.caption.fontWeight};
  line-height: ${({ theme }) => theme.typography.caption.lineHeight};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

// 색상 변형을 위한 공통 스타일
const textVariant = css<{ variant?: 'primary' | 'secondary' | 'disabled' }>`
  color: ${({ theme, variant = 'primary' }) => theme.colors.text[variant]};
`;

// 색상 변형이 가능한 Text 컴포넌트
export const Text = styled.span<{ 
  variant?: 'primary' | 'secondary' | 'disabled';
  bold?: boolean;
}>`
  ${textVariant};
  font-weight: ${({ bold }) => bold ? 600 : 400};
`;

// ... 다른 Typography 컴포넌트들
