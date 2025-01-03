import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Footer = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.background.paper};
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
  padding: 64px 0 32px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
`;

export const Top = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 48px;
  margin-bottom: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.5;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Link = styled(RouterLink)`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const ContactInfo = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
`;

export const ContactNumber = styled.div`
  margin-top: 8px;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
  margin: 0 0 32px;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Copyright = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 14px;
`;

export const CompanyInfo = styled.div`
  display: flex;
  gap: 16px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 4px;
  }
`; 