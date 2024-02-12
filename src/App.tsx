import { lazy, useState } from "react";
import Header from "@components/Header.tsx";

const UserInput = lazy(() => import("@components/UserInput.tsx"));
const Table = lazy(() => import("@components/table/Table.tsx"));

const App = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 100,
    annualInvestment: 10,
    expectedReturn: 6,
    duration: 10,
  });

  const validDuration = userInput.duration >= 1;
  const validValue = Object.values(userInput).every((val) => !isNaN(val));

  function handleChange(inputIdentifier: string, newValue: string) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: parseFloat(newValue),
      };
    });
  }

  function clearInputs() {
    setUserInput({
      initialInvestment: 100,
      annualInvestment: 10,
      expectedReturn: 6,
      duration: 10,
    });
  }

  return (
    <>
      <Header
        logo="investment-calculator-logo"
        title="React Investment Calculator"
      />
      <UserInput state={userInput} onChange={handleChange} />
      {validValue ? (
        validDuration ? (
          <Table state={userInput} />
        ) : (
          <dialog className="center dialog" open>
            <strong>Please enter the correct information.</strong> Make sure
            your duration is greater than a number equal to {userInput.duration}
            . We understand. {userInput.duration} is a big number, but...
            <form method="dialog">
              <button onClick={() => handleChange("duration", "1")}>
                OK, I understood
              </button>
            </form>
          </dialog>
        )
      ) : (
        <dialog className="center dialog" open>
          <strong>Please, stop using symbols.</strong> Rewrite your values again
          with numbers only. We understand everything, but we cant calculate
          with symbols or letters.
          <form method="dialog">
            <button onClick={() => clearInputs()}>OK, I understood</button>
          </form>
        </dialog>
      )}
    </>
  );
};

export default App;
