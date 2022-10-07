import { useState } from "react";
import Button from "./components/Button";
import "./App.css";

const arrBtn = [
  "AC",
  "DEL",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "+",
  "3",
  "2",
  "1",
  "-",
  "0",
  ".",
  "=",
];

function App() {
  const [digits, setDigits] = useState("");
  const [result, setResult] = useState("");

  const arrOfOps = ["/", "*", "+", "-"];

  const handleDigits = (e) => {
    let value = e.target.textContent;

    if (
      (arrOfOps.includes(value) && digits === "") ||
      (arrOfOps.includes(digits.slice(-1)) && arrOfOps.includes(value))
    ) {
      return;
    }

    setDigits((dig) => dig + value);
  };

  const clear = () => {
    setDigits("");
    setResult("");
  };

  const handleDelete = () => {
    let value = digits.slice(0, -1);
    setDigits(value);

    if (result) {
      setResult(eval(digits).toString());
    }
  };

  const calculate = () => {
    let value = eval(digits).toString();
    setResult(value);
  };

  return (
    <>
      <Button />
      <div className='wrapper'>
        <div className='screen'>
          <p>{digits || "0"}</p>
          <p className='result'>{result ? result : ""}</p>
        </div>
        <div className='buttonWrapper'>
          {arrBtn.map((btn) => {
            return (
              <Button
                key={btn}
                value={btn}
                className={
                  btn === "="
                    ? "equals"
                    : btn === "AC" || btn === "DEL"
                      ? "control"
                      : btn === "*" || btn === "+" || btn === "/" || btn === "-"
                        ? "operator"
                        : ""
                }
                onClick={
                  btn === "="
                    ? calculate
                    : btn === "AC"
                      ? clear
                      : btn === "DEL"
                        ? handleDelete
                        : handleDigits
                }
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;