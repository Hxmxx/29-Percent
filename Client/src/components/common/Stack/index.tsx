import * as S from './styles';

interface StackProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  gap?: number;
  justify?: 'start' | 'center' | 'end' | 'space-between';
  align?: 'start' | 'center' | 'end';
  fullWidth?: boolean;
}

export const Stack = ({ 
  children, 
  direction = 'column',
  gap = 0,
  justify = 'start',
  align = 'start',
  fullWidth = false
}: StackProps) => {
  return (
    <S.Container 
      $direction={direction}
      $gap={gap}
      $justify={justify}
      $align={align}
      $fullWidth={fullWidth}
    >
      {children}
    </S.Container>
  );
}; 