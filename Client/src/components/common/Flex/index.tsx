import styled from 'styled-components';

interface FlexProps {
  direction?: 'row' | 'column';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  gap?: number;
  wrap?: 'nowrap' | 'wrap';
  flex?: number | string;
  fullWidth?: boolean;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  align-items: ${({ align = 'center' }) => align};
  justify-content: ${({ justify = 'flex-start' }) => justify};
  gap: ${({ gap = 0 }) => gap + 'px'};
  flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
  flex: ${({ flex = 'initial' }) => flex};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
`; 