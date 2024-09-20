import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const appendToDisplay = (input) => {
    setDisplay(display + input);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <input
          id="display"
          value={display}
          readOnly
          className="w-full h-16 text-3xl text-white bg-gray-800 border border-gray-700 rounded-lg text-right px-4 mb-4"
        />
        <div className="grid grid-cols-4 gap-4">
          <button
            className="bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-400"
            onClick={() => appendToDisplay("+")}>
            +
          </button>
          <button
            className="bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-400"
            onClick={() => appendToDisplay("-")}>
            -
          </button>
          <button
            className="bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-400"
            onClick={() => appendToDisplay("*")}>
            *
          </button>
          <button
            className="bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-400"
            onClick={() => appendToDisplay("/")}>
            /
          </button>

          {/* Number Buttons */}
          {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."].map(
            (num) => (
              <button
                key={num}
                className="bg-gray-700 text-white font-bold py-2 rounded hover:bg-gray-600"
                onClick={() => appendToDisplay(num)}>
                {num}
              </button>
            )
          )}

          <button
            className="bg-green-500 text-white font-bold py-2 rounded hover:bg-green-400 col-span-2"
            onClick={calculate}>
            =
          </button>
          <button
            className="bg-red-500 text-white font-bold py-2 rounded hover:bg-red-400"
            onClick={clearDisplay}>
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
