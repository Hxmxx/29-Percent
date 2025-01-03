import * as S from './styles';
import { Spinner } from './Spinner';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  loading?: boolean;
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  loading = false,
  children,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? <Spinner /> : children}
    </S.Button>
  );
};
