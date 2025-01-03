import styled from 'styled-components';

interface ContainerProps {
  $direction: 'row' | 'column';
  $gap: number;
  $justify: 'start' | 'center' | 'end' | 'space-between';
  $align: 'start' | 'center' | 'end';
  $fullWidth: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  gap: ${({ $gap }) => $gap}px;
  justify-content: ${({ $justify }) => 
    $justify === 'start' ? 'flex-start' : 
    $justify === 'end' ? 'flex-end' : 
    $justify === 'space-between' ? 'space-between' : 
    $justify};
  align-items: ${({ $align }) => 
    $align === 'start' ? 'flex-start' : 
    $align === 'end' ? 'flex-end' : 
    $align};
  width: ${({ $fullWidth }) => $fullWidth ? '100%' : 'auto'};
`; 