import { Stack } from '../../../components/common/Stack';
import * as S from './styles';

type Period = 'daily' | 'weekly' | 'monthly' | 'yearly';

interface DateFilterProps {
  selectedPeriod: Period;
  onPeriodChange: (period: Period) => void;
}

export const DateFilter = ({ selectedPeriod, onPeriodChange }: DateFilterProps) => {
  return (
    <Stack direction="row" gap={4}>
      <S.FilterButton 
        $isActive={selectedPeriod === 'daily'} 
        onClick={() => onPeriodChange('daily')}
      >
        일간
      </S.FilterButton>
      <S.FilterButton 
        $isActive={selectedPeriod === 'weekly'} 
        onClick={() => onPeriodChange('weekly')}
      >
        주간
      </S.FilterButton>
      <S.FilterButton 
        $isActive={selectedPeriod === 'monthly'} 
        onClick={() => onPeriodChange('monthly')}
      >
        월간
      </S.FilterButton>
      <S.FilterButton 
        $isActive={selectedPeriod === 'yearly'} 
        onClick={() => onPeriodChange('yearly')}
      >
        연간
      </S.FilterButton>
    </Stack>
  );
}; 