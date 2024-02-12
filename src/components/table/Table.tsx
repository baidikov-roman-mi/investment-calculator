import { calculateInvestmentResults, formatter } from "../../util/investment";
interface Props {
  state: {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  };
}

const Table = ({ state }: Props) => {
  const resData = calculateInvestmentResults(state);
  console.log("resData :", resData);

  const initialInvestment =
    resData[0].valueEndOfYear -
    resData[0].interest -
    resData[0].annualInvestment;
  return (
    <>
      <section id="result" className="center">
        <table>
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col">Investment Value</th>
              <th scope="col">Interest(Year)</th>
              <th scope="col">Total Interest</th>
              <th scope="col">Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {resData.map((data) => {
              const totalInterest =
                data.valueEndOfYear - data.annualInvestment * data.year;
              const totalAmountInvested = data.valueEndOfYear - totalInterest;

              return (
                <tr key={data.year}>
                  <td>{data.year}</td>
                  <td>{formatter.format(data.valueEndOfYear)}</td>
                  <td>{formatter.format(data.interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Table;
