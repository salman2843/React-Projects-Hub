import { useState } from "react";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "AC") {
      setExpression("");
      setResult("");
    } else if (value === "CE") {
      setExpression(expression.slice(0, -1));
    } else if (value === "=") {
      try {
        const evaluatedResult = eval(expression);
        setResult(evaluatedResult.toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      // Replace the last operator if the previous character is an operator
      const lastChar = expression.slice(-1);
      if (["+", "-", "*", "/"].includes(lastChar)) {
        setExpression(expression.slice(0, -1) + value);
      } else {
        setExpression(expression + value);
      }
    } else if (value === "√") {
      try {
        const evaluatedResult = Math.sqrt(parseFloat(expression));
        setResult(evaluatedResult.toString());
      } catch (error) {
        setResult("Error");
      }
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className='max-w-md mx-auto p-4 bg-[#dad7cd] rounded-lg shadow-lg'>
      <h1 className='text-center text-4xl font-bold text-[#344e41] mb-4'>
        Calculator App
      </h1>
      <div className='flex flex-col'>
        <div className='text-right text-3xl p-4 border-b border-gray-200'>
          {expression}
        </div>
        <div className='text-right text-3xl p-4 border-b border-gray-200'>
          {result}
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4 p-4'>
        <button
          className='bg-[#a3b18a] hover:bg-[#588157] text-white p-4 rounded-lg'
          onClick={() => handleButtonClick("AC")}
        >
          AC
        </button>
        <button
          className='bg-[#a3b18a] hover:bg-[#588157] text-white p-4 rounded-lg'
          onClick={() => handleButtonClick("CE")}
        >
          CE
        </button>
        <button
          className='bg-[#a3b18a] hover:bg-[#588157] text-white p-4 rounded-lg'
          onClick={() => handleButtonClick("/")}
        >
          /
        </button>
        <button
          className='bg-[#a3b18a] hover:bg-[#588157] text-white p-4 rounded-lg'
          onClick={() => handleButtonClick("*")}
        >
          *
        </button>
        <button
          className='bg-[#344e41] hover:bg-[#3a5a40] text-white p-4 rounded-lg'
          onClick={() => handleButtonClick("7")}
        >
          7
        </button>
        <button
          className='bg-[#344e41] hover:bg-[#3a5a40] text-white p-4 rounded-lg'
          onClick={() => handleButtonClick("8")}
        >
          8
        </button>
        <button
          className='bg-[#344e41] hover:bg-[#3a5a40] text-white p-4 rounded-lg'
          onClick={() => handleButtonClick("9")}
        >
          9
        </button>
        <button
          className='bg-[#a3b18a] hover:bg-[#588157] text-white p-4 rounded-lg'
          onClick={() => handleButtonClick("-")}
        >
          -
        </button>
        <button
          className='bg-[#344e41] hover:bg-[#3a5a40] text-white p-4 rounded-lg'
          onClick={() => handleButtonClick("4")}
        >
          4
        </button>
        <button
          className='bg-[#344e41] hover:bg-[#3a5a40] text-white p-4 rounded-lg'
          onClick={() => handleButtonClick("5")}
        >
          5
        </button>
        <button
          className='bg-[#344e41] hover:bg-[#3a5a40] text-white p-4 rounded-lg'
          onClick={() => handleButtonClick("6")}
        >
          6
        </button>
        <button
          className='bg-[#a3b18a] hover:bg-[#588157] text-white p-4 rounded-lg'
          onClick={() => handleButtonClick("+")}
        >
          +
        </button>
        <button
          className='bg-[#344e41] hover:bg-[#3a5a40] text-white p-4 rounded-lg'
          onClick={() => handleButtonClick("1")}
        >
          1
        </button>
        <button
          className='bg-[#344e41] hover:bg-[#3a5a40] text-white p-4 rounded-lg'
          onClick={() => handleButtonClick("2")}
        >
          2
        </button>
        <button
          className='bg-[#344e41] hover:bg-[#3a5a40] text-white p-4 rounded-lg'
          onClick={() => handleButtonClick("3")}
        >
          3
        </button>
        <button
          className='bg-[#a3b18a] hover:bg-[#588157] text-white p-4 rounded-lg'
          onClick={() => handleButtonClick("=")}
        >
          =
        </button>
        <button
          className='bg-[#344e41] hover:bg-[#3a5a40] text-white p-4 rounded-lg'
          onClick={() => handleButtonClick("0")}
        >
          0
        </button>
        <button
          className='bg-[#344e41] hover:bg-[#3a5a40] text-white p-4 rounded-lg'
          onClick={() => handleButtonClick(".")}
        >
          .
        </button>
      </div>
    </div>
  );
};

export default Calculator;
