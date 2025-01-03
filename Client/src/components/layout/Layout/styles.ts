import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
`;

export const Section = styled.section<{
  $gap?: number;
  $justify?: 'start' | 'center' | 'end' | 'space-between';
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => ($gap ? `${$gap}px` : '0')};
  justify-content: ${({ $justify }) => $justify || 'start'};
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`; 