import Result from "./Result";
import { calculateInvestmentResults } from "../util/investment";

function ResultTable({ inputs }) {
  let annualData = calculateInvestmentResults(inputs);
  const initialInvestment =
    annualData[0].valueEndOfYear -
    annualData[0].interest -
    annualData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.length > 0 &&
          annualData.map((annualItem, index) => (
            <Result
              key={index}
              annualItem={annualItem}
              initialInvestment={initialInvestment}
            />
          ))}
      </tbody>
    </table>
  );
}

export default ResultTable;
