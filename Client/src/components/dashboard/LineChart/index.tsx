import { ResponsiveContainer, LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, TooltipProps } from 'recharts';
import { formatCurrency } from '../../../utils/format';
import * as S from './styles';

interface DataPoint {
  date: string;
  value: number;
}

interface LineChartProps {
  data: DataPoint[];
  title: string;
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <S.TooltipContainer>
      <S.TooltipLabel>{label}</S.TooltipLabel>
      <S.TooltipValue>{formatCurrency(payload[0].value as number)}</S.TooltipValue>
    </S.TooltipContainer>
  );
};

export const LineChart = ({ data, title }: LineChartProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <ResponsiveContainer width="100%" height={400}>
        <RechartsLineChart data={data} margin={{ top: 10, right: 30, left: 30, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="date" />
          <YAxis 
            tickFormatter={(value) => formatCurrency(value)}
            width={80}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#3B82F6" 
            strokeWidth={2}
            dot={false}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </S.Container>
  );
}; 