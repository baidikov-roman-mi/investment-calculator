import { lazy, useState } from "react";
import Header from "./components/Header.tsx";

const UserInput = lazy(() => import("./components/UserInput.tsx"));
const Table = lazy(() => import("./components/table/Table.tsx"));

// import { calculateInvestmentResults } from "./util/investment.ts";
// calculateInvestmentResults();

const App = () => {
  // const [initial, setInitial] = useState(0);

  // function handleInitial() {
  // }

  return (
    <>
      <Header
        logo="investment-calculator-logo"
        title="React Investment Calculator"
      />
        <UserInput />
      <div id="result" className="center">
        <Table />
      </div>
    </>
  );
};

export default App;
