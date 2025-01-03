export type Period = 'daily' | 'weekly' | 'monthly' | 'yearly';

export interface TaxData {
  expectedTax: number;          // 예상 세금액
  deductibleExpenses: number;   // 공제 가능 비용
  taxDue: number;              // 납부 예정 세금
  potentialSaving: number;     // 절세 가능 금액
}

export interface ExpenseCategory {
  name: string;
  amount: number;
  isDeductible: boolean;       // 공제 가능 여부
}

export interface TaxSchedule {
  dueDate: string;
  type: string;                // 예: '부가세', '종합소득세' 등
  status: 'upcoming' | 'overdue' | 'completed';
}

export interface DashboardData {
  taxData: TaxData;
  expensesByCategory: ExpenseCategory[];
  upcomingTaxes: TaxSchedule[];
  unprocessedReceipts: number;
  recentTransactions: Array<{
    date: string;
    description: string;
    amount: number;
    category: string;
  }>;
  savingTips: Array<{
    tip: string;
    potentialSaving: number;
  }>;
} 