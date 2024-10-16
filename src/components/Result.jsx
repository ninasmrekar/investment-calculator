import { formatter } from "../util/investment.js";

function Result({ annualItem, initialInvestment }) {
  const totalInterest =
    annualItem.valueEndOfYear -
    annualItem.annualInvestment * annualItem.year -
    initialInvestment;
  const totalAmountInvested = annualItem.valueEndOfYear - totalInterest;

  return (
    <tr>
      <td>{annualItem.year}</td>
      <td>{formatter.format(annualItem.valueEndOfYear)}</td>
      <td>{formatter.format(annualItem.interest)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(totalAmountInvested)}</td>
    </tr>
  );
}

export default Result;
