import { lazy, useState } from "react";
import Header from "./components/Header.tsx";

const UserInput = lazy(() => import("./components/UserInput.tsx"));
const Table = lazy(() => import("./components/table/Table.tsx"));

// import { calculateInvestmentResults } from "./util/investment.ts";
// calculateInvestmentResults();

const App = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 100,
    annualInvestment: 10,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier: string, newValue: string) {
    setUserInput((prevUserInput) => {
      console.log("prevUserInput :", prevUserInput);

      return {
        ...prevUserInput,
        [inputIdentifier]: parseFloat(newValue),
      };
    });
  }

  return (
    <>
      <Header
        logo="investment-calculator-logo"
        title="React Investment Calculator"
      />
      <UserInput state={userInput} onChange={handleChange} />
      <Table state={userInput} />
    </>
  );
};

export default App;
