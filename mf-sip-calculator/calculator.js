function sipCalculator(expenseRatio, monthlyInvestment, returnsPercentage, inflationRate, years) {
  const monthlyRateOfReturn = (1 + returnsPercentage / 100) ** (1 / 12) - 1;
  const dailyExpenseRatio = expenseRatio / 365;
  const n = years * 12;
  let futureValue = 0;
  
  for (let i = 0; i < n; i++) {
    let currentMonthInvestmentValue = monthlyInvestment;
    for (let j = 0; j < 30; j++) {
      currentMonthInvestmentValue *= (1 - dailyExpenseRatio);
    }
    futureValue *= (1 + monthlyRateOfReturn);
    futureValue += currentMonthInvestmentValue;
  }
  
  const totalInvestment = monthlyInvestment * n;
  const expenseAmount = totalInvestment - (futureValue / (((1 + monthlyRateOfReturn) ** n - 1) / monthlyRateOfReturn) * monthlyInvestment);
  const futureValueAfterInflation = futureValue / ((1 + inflationRate / 100) ** years);
  return [futureValue, expenseAmount, futureValueAfterInflation];
}
