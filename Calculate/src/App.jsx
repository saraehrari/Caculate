import { useState } from "react";
import "./App.css";

function App(){

  const [num1, setNum1]= useState("");
  const [num2, setNum2]= useState("");
  const [error, setError]= useState();
  const [dsplay, setDsplay]= useState('');
  const [operation, setOperation] = useState("");
  const [activeInput, setActiveInput] = useState("num1");


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

 function Calculation(){
 if(operation==='+'){
   Addition();
 }
 
 else if (operation === "-") {
 Subtraction();
}

 if(operation=== "×"){
  Multiplication();
 }

 else if(operation ==="÷"){
  Division();
 }

  }
  function Handledelete(){
    setNum1("");
    setNum2("")
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
        <button type="button" onClick={() => setOperation("+")}>+</button>
        <button type="button" onClick={() => setOperation("-")}>-</button>
        <button type="button" onClick={()=> setOperation("×")}>×</button>
        <button type="button" onClick={()=> setOperation("÷")}>÷</button>
        
  <button type="button" onClick={Calculation}>=</button>
      </div>

      {/* Result */}
      <h2>Result: {dsplay}</h2>

      {/* Error Message */}
      {error && <p>{error}</p>}

      <button onSubmit={Handledelete}>Reset</button>
    </form>

    <div className="number-grid">
  {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((number) => (
    <button
    key={number}
    type="button"
    onClick={()=>{
    if(operation===""){
      setNum1((prev)=> prev+String(number))
    }else{
      setNum2((prev) =>prev+String(number))
    }

    }}
    >
      {number}
    </button>
  ))}
</div>
  </div>
  )
}

export default App;