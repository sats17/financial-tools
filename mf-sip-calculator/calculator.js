function sipCalculator(expenseRatio, monthlyInvestment, returnsPercentage, inflationRate, years) {
  const monthlyRateOfReturn = (1 + returnsPercentage / 100) ** (1 / 12) - 1;
  const n = years * 12;
  const futureValue = monthlyInvestment * (((1 + monthlyRateOfReturn) ** n - 1) / monthlyRateOfReturn);
  const totalInvestment = monthlyInvestment * n;
  const expenseAmount = totalInvestment * expenseRatio / 100;
  const realReturns = futureValue - totalInvestment - expenseAmount;
  const realReturnsAfterInflation = realReturns / ((1 + inflationRate / 100) ** years);
  return [futureValue, realReturns, realReturnsAfterInflation];
}
