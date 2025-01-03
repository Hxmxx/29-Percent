export const calculateTrend = (current: number, previous: number): { value: number; isPositive: boolean } => {
  const difference = current - previous;
  const percentageChange = (difference / previous) * 100;
  
  return {
    value: Math.abs(Number(percentageChange.toFixed(1))),
    isPositive: percentageChange >= 0
  };
}; 