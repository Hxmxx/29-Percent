import { Stack } from '../../components/common/Stack';
import { StatCard } from '../../components/dashboard/StatCard';
import { BarChart } from '../../components/dashboard/BarChart';
import * as S from './styles';
import { HiReceiptTax, HiDocumentReport, HiCash } from 'react-icons/hi';
import { useState } from 'react';
import { DateFilter } from '../../components/dashboard/DateFilter';
import { Period, DashboardData } from '../../types/dashboard';
import { Button } from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('monthly');
  const navigate = useNavigate();

  // 임시 데이터
  const dashboardData: Record<Period, DashboardData> = {
    daily: {
      taxData: {
        expectedTax: 234000,
        deductibleExpenses: 150000,
        taxDue: 84000,
        potentialSaving: 20000
      },
      expensesByCategory: [
        { name: '사무실 임대료', amount: 40000, isDeductible: true },
        { name: '장비 구매', amount: 30000, isDeductible: true },
        { name: '교통비', amount: 15000, isDeductible: true },
        { name: '식비', amount: 20000, isDeductible: true },
        { name: '통신비', amount: 5000, isDeductible: true }
      ],
      upcomingTaxes: [
        { dueDate: '2024-04-25', type: '부가가치세', status: 'upcoming' },
        { dueDate: '2024-05-31', type: '종합소득세', status: 'upcoming' }
      ],
      unprocessedReceipts: 3,
      recentTransactions: [
        { date: '2024-03-15', description: '모니터 구매', amount: 500000, category: '장비' },
        { date: '2024-03-15', description: '식비', amount: 15000, category: '식비' }
      ],
      savingTips: [
        { tip: '프리랜서 필요경비 공제 신청', potentialSaving: 12000 },
        { tip: '홈오피스 공과금 공제', potentialSaving: 8000 }
      ]
    },
    weekly: {
      taxData: {
        expectedTax: 1234000,
        deductibleExpenses: 750000,
        taxDue: 484000,
        potentialSaving: 120000
      },
      expensesByCategory: [
        { name: '사무실 임대료', amount: 300000, isDeductible: true },
        { name: '장비 구매', amount: 200000, isDeductible: true },
        { name: '교통비', amount: 75000, isDeductible: true },
        { name: '식비', amount: 100000, isDeductible: true },
        { name: '통신비', amount: 37500, isDeductible: true }
      ],
      upcomingTaxes: [
        { dueDate: '2024-04-25', type: '부가가치세', status: 'upcoming' },
        { dueDate: '2024-05-31', type: '종합소득세', status: 'upcoming' }
      ],
      unprocessedReceipts: 8,
      recentTransactions: [
        { date: '2024-03-15', description: '노트북 구매', amount: 1500000, category: '장비' },
        { date: '2024-03-14', description: '주간 임대료', amount: 300000, category: '임대료' }
      ],
      savingTips: [
        { tip: '프리랜서 필요경비 공제 신청', potentialSaving: 70000 },
        { tip: '홈오피스 공과금 공제', potentialSaving: 50000 }
      ]
    },
    monthly: {
      taxData: {
        expectedTax: 5234000,
        deductibleExpenses: 3150000,
        taxDue: 2084000,
        potentialSaving: 450000
      },
      expensesByCategory: [
        { name: '사무실 임대료', amount: 1200000, isDeductible: true },
        { name: '장비 구매', amount: 800000, isDeductible: true },
        { name: '교통비', amount: 300000, isDeductible: true },
        { name: '식비', amount: 400000, isDeductible: true },
        { name: '통신비', amount: 150000, isDeductible: true }
      ],
      upcomingTaxes: [
        { dueDate: '2024-04-25', type: '부가가치세', status: 'upcoming' },
        { dueDate: '2024-05-31', type: '종합소득세', status: 'upcoming' }
      ],
      unprocessedReceipts: 12,
      recentTransactions: [
        { date: '2024-03-15', description: '노트북 구매', amount: 2000000, category: '장비' },
        { date: '2024-03-14', description: '사무실 임대료', amount: 1200000, category: '임대료' }
      ],
      savingTips: [
        { tip: '프리랜서 필요경비 공제 신청', potentialSaving: 280000 },
        { tip: '홈오피스 공과금 공제', potentialSaving: 170000 }
      ]
    },
    yearly: {
      taxData: {
        expectedTax: 62808000,
        deductibleExpenses: 37800000,
        taxDue: 25008000,
        potentialSaving: 5400000
      },
      expensesByCategory: [
        { name: '사무실 임대료', amount: 14400000, isDeductible: true },
        { name: '장비 구매', amount: 9600000, isDeductible: true },
        { name: '교통비', amount: 3600000, isDeductible: true },
        { name: '식비', amount: 4800000, isDeductible: true },
        { name: '통신비', amount: 1800000, isDeductible: true }
      ],
      upcomingTaxes: [
        { dueDate: '2024-04-25', type: '부가가치세', status: 'upcoming' },
        { dueDate: '2024-05-31', type: '종합소득세', status: 'upcoming' }
      ],
      unprocessedReceipts: 45,
      recentTransactions: [
        { date: '2024-03-15', description: '연간 장비 구매', amount: 24000000, category: '장비' },
        { date: '2024-03-14', description: '연간 임대료', amount: 14400000, category: '임대료' }
      ],
      savingTips: [
        { tip: '프리랜서 필요경비 공제 신청', potentialSaving: 3360000 },
        { tip: '홈오피스 공과금 공제', potentialSaving: 2040000 }
      ]
    }
  } as Record<Period, DashboardData>;

  const currentData = dashboardData[selectedPeriod];

  return (
    <Stack gap={24}>
      <Stack direction="row" justify="space-between" align="center" fullWidth>
        <S.Title>대시보드</S.Title>
        <Stack direction="row" gap={16} align="center">
          <Button onClick={() => navigate('/receipts/upload')}>
            영수증 업로드
          </Button>
          <DateFilter 
            selectedPeriod={selectedPeriod} 
            onPeriodChange={setSelectedPeriod}
          />
        </Stack>
      </Stack>

      <S.Grid>
        <StatCard
          icon={<HiReceiptTax size={24} />}
          title="예상 세금"
          value={currentData.taxData.expectedTax}
          trend={{ value: 12.5, isPositive: false }}
          isCurrency
        />
        <StatCard
          icon={<HiDocumentReport size={24} />}
          title="공제 가능 비용"
          value={currentData.taxData.deductibleExpenses}
          trend={{ value: 8.2, isPositive: true }}
          isCurrency
        />
        <StatCard
          icon={<HiCash size={24} />}
          title="절세 가능 금액"
          value={currentData.taxData.potentialSaving}
          trend={{ value: 15.3, isPositive: true }}
          isCurrency
        />
      </S.Grid>
      
      <S.Grid>
        <BarChart 
          data={currentData.expensesByCategory.map(category => ({
            name: category.name,
            deductible: category.isDeductible ? category.amount : 0,
            nonDeductible: category.isDeductible ? 0 : category.amount
          }))}
          title="카테고리별 지출" 
        />
        <Stack gap={16}>
          <S.SectionTitle>다가오는 신고 일정</S.SectionTitle>
          {currentData.upcomingTaxes.map((tax, index) => (
            <S.TaxScheduleItem key={index} $status={tax.status}>
              <div>
                <S.TaxType>{tax.type}</S.TaxType>
                <S.TaxDate>{tax.dueDate} 까지</S.TaxDate>
              </div>
              <S.TaxStatus>{tax.status === 'upcoming' ? '예정' : '지연'}</S.TaxStatus>
            </S.TaxScheduleItem>
          ))}
        </Stack>
      </S.Grid>
    </Stack>
  );
};