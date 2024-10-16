import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ResultTable from "./components/ResultTable";

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  const inputIsValid = inputs.duration >= 1;

  function handleChange(key, value) {
    setInputs((prevValues) => {
      return { ...prevValues, [key]: +value };
    });
  }

  return (
    <>
      <Header />
      <Form onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <ResultTable inputs={inputs} />}
    </>
  );
}

export default App;
