import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operation) => {
    if (num1 === "" || num2 === "") {
      setResult("Please enter both numbers");
      return;
    }
        
    const a = Number(num1);
    const b = Number(num2);

    switch (operation) {
      case "+":
        setResult(a + b);
        break;

      case "-":
        setResult(a - b);
        break;

      case "*":
        setResult(a * b);
        break;

      case "/":
        setResult(b === 0 ? "Cannot divide by zero" : a / b);
        break;

      default:
        setResult("");
    }
  };

  const clearCalculator = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <h1>Calculator</h1>
        <p className="subtitle">Perform basic arithmetic operations</p>

        <div className="inputs">
          <input
            type="number"
            placeholder="Enter first number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />

          <input
            type="number"
            placeholder="Enter second number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>

        <div className="buttons">
          <button onClick={() => calculate("+")}>+</button>
          <button onClick={() => calculate("-")}>−</button>
          <button onClick={() => calculate("*")}>×</button>
          <button onClick={() => calculate("/")}>÷</button>
        </div>

        <div className="result">
          <span>Result</span>
          <strong>{result === "" ? "—" : result}</strong>
        </div>

        <button className="clear-btn" onClick={clearCalculator}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default Calculator;