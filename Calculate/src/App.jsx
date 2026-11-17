
import { useState } from "react";
import "./App.css";

function App() {

  // 1. STATES
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [error, setError] = useState("");
  const [dsplay, setDsplay] = useState("");
  const [operation, setOperation] = useState("");
  const [activeInput, setActiveInput] = useState("num1");


  // 2. CALCULATION FUNCTIONS

  const Addition = () => {
    const result = Number(num1) + Number(num2);
    setDsplay(result);
  };

  const Subtraction = () => {
    const result = Number(num1) - Number(num2);
    setDsplay(result);
  };

  const Multiplication = () => {
    const result = Number(num1) * Number(num2);
    setDsplay(result);
  };

  const Division = () => {
    if (Number(num2) === 0) {
      setError("Division by Zero is not Allowed");
      return;
    }

    const result = Number(num1) / Number(num2);
    setDsplay(result);
  };


  // 3. MAIN CALCULATION FUNCTION

  function Calculation() {
    if (num1 === "" || num2 === "") {
      setError("Please enter both numbers");
      return;
    }

    setError("");

    if (operation === "+") {
      Addition();
    } else if (operation === "-") {
      Subtraction();
    } else if (operation === "×") {
      Multiplication();
    } else if (operation === "÷") {
      Division();
    }
  }


  // 4. DELETE FUNCTION

  function HandleDelete() {
    if (activeInput === "num1") {
      setNum1((prev) => prev.slice(0, -1));
    } else {
      setNum2((prev) => prev.slice(0, -1));
    }
  }


  // 5. RESET FUNCTION

  function HandleReset() {
    setNum1("");
    setNum2("");
    setOperation("");
    setDsplay("");
    setError("");
    setActiveInput("num1");
  }


  // 6. RETURN JSX

  return (
    <div className="calculator">

      <h1>React Calculator</h1>

      <form>

        {/* First Number */}
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          onFocus={() => setActiveInput("num1")}
          placeholder="Enter first number"
        />

        {/* Second Number */}
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          onFocus={() => setActiveInput("num2")}
          placeholder="Enter second number"
        />

        {/* Operation Buttons */}
        <div>
          <button type="button" onClick={() => {
            setOperation("+");
            setActiveInput("num2");
          }}>+</button>

          <button type="button" onClick={() => {
            setOperation("-");
            setActiveInput("num2");
          }}>-</button>

          <button type="button" onClick={() => {
            setOperation("×");
            setActiveInput("num2");
          }}>×</button>

          <button type="button" onClick={() => {
            setOperation("÷");
            setActiveInput("num2");
          }}>÷</button>

          <button type="button" onClick={Calculation}>=</button>

          <button type="button" onClick={HandleDelete}>
            ⌫
          </button>
        </div>

        {/* Result */}
        <h2>Result: {dsplay}</h2>

        {/* Error */}
        {error && <p>{error}</p>}

        {/* Reset */}
        <button type="button" onClick={HandleReset}>
          Reset
        </button>

      </form>


      {/* Number Buttons */}
      <div className="number-grid">

        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((number) => (
          <button
            key={number}
            type="button"
            onClick={() => {
              if (activeInput === "num1") {
                setNum1((prev) => prev + String(number));
              } else {
                setNum2((prev) => prev + String(number));
              }
            }}
          >
            {number}
          </button>
        ))}

      </div>

    </div>
  );
}

export default App;
