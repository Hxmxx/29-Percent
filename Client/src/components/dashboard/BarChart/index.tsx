import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import * as S from './styles';
import { formatCurrency } from '../../../utils/format';

interface BarChartProps {
  data: Array<{
    name: string;
    deductible: number;
    nonDeductible: number;
  }>;
  title: string;
}

export const BarChart = ({ data, title }: BarChartProps) => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <S.TooltipContainer>
          <S.TooltipLabel>{label}</S.TooltipLabel>
          <S.TooltipValue>{formatCurrency(payload[0].value)}</S.TooltipValue>
          {payload[0].payload.isDeductible !== undefined && (
            <S.TooltipDeductible>
              {payload[0].payload.isDeductible ? '공제 가능' : '공제 불가'}
            </S.TooltipDeductible>
          )}
        </S.TooltipContainer>
      );
    }
    return null;
  };

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <ResponsiveContainer width="100%" height={400}>
        <RechartsBarChart data={data} margin={{ top: 10, right: 30, left: 30, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis 
            tickFormatter={(value) => formatCurrency(value)}
            width={80}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            name="공제 가능"
            dataKey="deductible" 
            fill="#3B82F6"
            radius={[4, 4, 0, 0]}
            stackId="a"
          />
          <Bar 
            name="공제 불가"
            dataKey="nonDeductible" 
            fill="#94A3B8"
            radius={[4, 4, 0, 0]}
            stackId="a"
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </S.Container>
  );
}; 