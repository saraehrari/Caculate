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
    const result = Number(num1) + Number(num2)
    setDsplay(result);
  }
   const Multiplication= () =>{
    const result = Number(num1) + Number(num2)
    setDsplay(result);
  }
   const Division= () =>{
    const result = Number(num1) + Number(num2)
    setDsplay(result);
  }
  
    
  
   
}

export default App;