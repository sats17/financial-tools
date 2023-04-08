function sipCalculator(expenseRatio, monthlyInvestment, returnsPercentage, inflationRate, years) {
  let totalInvestment = monthlyInvestment * 12 * years;
  let returns = totalInvestment * (1 + returnsPercentage / 100) ** years;
  let expenseAmount = totalInvestment * expenseRatio / 100;
  let realReturns = returns - totalInvestment - expenseAmount;
  let realReturnsAfterInflation = realReturns / ((1 + inflationRate / 100) ** years);
  return [returns, realReturns, realReturnsAfterInflation];
}
