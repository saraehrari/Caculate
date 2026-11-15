import { useState } from "react";

function App(){

  const [num1, setNum1]= useState(0);
  const [num2, setNum2]= useState(0);
   const [error, setError]= useState();
  const [dsplay, setDsplay]= useState(null);


  const Addition= () =>{
    const result = Number(num1) + Number(num2)
    setDsplay(result);
  }
   const Subtraction= () =>{
    const result = Number(num1) - Number(num2)
    setDsplay(result);
  }
   const Multiplication= () =>{
    const result = Number(num1) * Number(num2)
    setDsplay(result);
  }
   const Division= () =>{
     if (Number(num2)===0){
    setError("Division by Zero is not Allowed")
     return;
  }
    setError("")
    const result = Number(num1) / Number(num2)
    setDsplay(result);
   
  }

  return(
  <div className="calculator">
    <h1>React Calculator</h1>

    <form>
      {/* First Number */}
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />

      {/* Second Number */}
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />

      {/* Calculation Buttons */}
      <div>
        <button type="button" onClick={Addition}>+</button>
        <button type="button" onClick={Subtraction}>-</button>
        <button type="button" onClick={Multiplication}>×</button>
        <button type="button" onClick={Division}>÷</button>
      </div>

      {/* Result */}
      <h2>Result: {dsplay}</h2>

      {/* Error Message */}
      {error && <p>{error}</p>}
    </form>
  </div>
  )
}

export default App;