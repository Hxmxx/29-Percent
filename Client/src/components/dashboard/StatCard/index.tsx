import * as S from './styles';
import { formatCurrency, formatNumber } from '../../../utils/format';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  trend: {
    value: number;
    isPositive: boolean;
  };
  isCurrency?: boolean;
}

export const StatCard = ({ icon, title, value, trend, isCurrency = false }: StatCardProps) => {
  const formattedValue = isCurrency ? formatCurrency(Number(value)) : formatNumber(Number(value));
  
  return (
    <S.Container>
      <S.IconWrapper>
        {icon}
      </S.IconWrapper>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Value>{formattedValue}</S.Value>
        {trend && (
          <S.Trend $isPositive={trend.isPositive}>
            {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
          </S.Trend>
        )}
      </S.Content>
    </S.Container>
  );
}; 