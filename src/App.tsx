import { lazy, useState } from "react";
import Header from "./components/Header.tsx";

const UserInput = lazy(() => import("./components/UserInput.tsx"));
const Table = lazy(() => import("./components/table/Table.tsx"));

const App = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 100,
    annualInvestment: 10,
    expectedReturn: 6,
    duration: 10,
  });

  const validInput = userInput.duration >= 1;

  function handleChange(inputIdentifier: string, newValue: string) {
    setUserInput((prevUserInput) => {
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
      {!validInput && (
        <p className="center">
          Please, enter valid input data. Make sure your duration is set to
          more, than 0
        </p>
      )}
      {validInput && <Table state={userInput} />}
    </>
  );
};

export default App;
