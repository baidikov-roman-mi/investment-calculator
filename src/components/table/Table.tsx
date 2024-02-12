interface Props {
  props?: string;
}

const Table = ({ props }: Props) => {
  return (
    <>
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
          <tr>
            <th scope="row">1</th>
            <td>1</td>
            <td>10</td>
            <td>100</td>
            <td>1000</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>1</td>
            <td>10</td>
            <td>100</td>
            <td>1000</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>1</td>
            <td>10</td>
            <td>100</td>
            <td>1000</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>1</td>
            <td>10</td>
            <td>100</td>
            <td>1000</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
