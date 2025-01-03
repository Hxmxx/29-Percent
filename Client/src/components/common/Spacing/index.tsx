import styled from 'styled-components';

interface SpacingProps {
  size: number;
  direction?: 'vertical' | 'horizontal';
}

export const Spacing = styled.div<SpacingProps>`
  ${({ size, direction = 'vertical' }) =>
    direction === 'vertical'
      ? `height: ${size}px;`
      : `width: ${size}px;`
  }
`; 