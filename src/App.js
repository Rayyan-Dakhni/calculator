import React, { useState } from "react";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState(0);
  const [operator, setOperator] = useState("");

  function performOperation(number) {
    switch (operator) {
      case "+":
        setAnswer(answer + number);
        break;

      case "-":
        setAnswer(answer - number);
        break;

      case "*":
        setAnswer(answer * number);
        break;

      case "/":
        setAnswer(answer / number);
        break;

      default:
        setAnswer(number);
    }
  }

  return (
    <div className="wrapper">
      <div className="calculator-screen neumorphism">
        <div className="screen neumorphism">
          <p className="answer-screen">{answer}</p>
        </div>
        <div className="button-holder neumorphism">
          <div className="row">
            <div
              className="col neumorphism"
              onClick={() => {
                setAnswer(answer + "7");
              }}
            >
              7
            </div>
            <div
              className="col neumorphism"
              onClick={() => {
                setAnswer(answer + "8");
              }}
            >
              8
            </div>
            <div
              className="col neumorphism"
              onClick={() => {
                setAnswer(answer + "9");
              }}
            >
              9
            </div>
            <div
              className="col neumorphism"
              style={{ backgroundColor: "orange", color: "black" }}
              onClick={() => {
                setAnswer("0");
              }}
            >
              AC
            </div>
          </div>
          <div className="row">
            <div
              className="col neumorphism"
              onClick={() => {
                setAnswer(answer + "7");
              }}
            >
              7
            </div>
            <div
              className="col neumorphism"
              onClick={() => {
                setAnswer(answer + "8");
              }}
            >
              8
            </div>
            <div
              className="col neumorphism"
              onClick={() => {
                setAnswer(answer + "9");
              }}
            >
              9
            </div>
            <div
              className="col neumorphism"
              style={{ backgroundColor: "black", color: "white" }}
              onClick={() => {
                setOperator("*");
                performOperation();
              }}
            >
              *
            </div>
          </div>
          <div className="row">
            <div
              className="col neumorphism"
              onClick={() => {
                setAnswer(answer + "4");
              }}
            >
              4
            </div>
            <div
              className="col neumorphism"
              onClick={() => {
                setAnswer(answer + "5");
              }}
            >
              5
            </div>
            <div
              className="col neumorphism"
              onClick={() => {
                setAnswer(answer + "6");
              }}
            >
              6
            </div>
            <div
              className="col neumorphism"
              style={{ backgroundColor: "black", color: "white" }}
              onClick={() => {
                setOperator("/");
                performOperation();
              }}
            >
              /
            </div>
          </div>
          <div className="row">
            <div
              className="col neumorphism"
              onClick={() => {
                setAnswer(answer + "1");
              }}
            >
              1
            </div>
            <div
              className="col neumorphism"
              onClick={() => {
                setAnswer(answer + "2");
              }}
            >
              2
            </div>
            <div
              className="col neumorphism"
              onClick={() => {
                setAnswer(answer + "3");
              }}
            >
              3
            </div>
            <div
              className="col neumorphism"
              style={{ backgroundColor: "black", color: "white" }}
              onClick={() => {
                setOperator("+");
                performOperation();
              }}
            >
              +
            </div>
          </div>
          <div className="row">
            <div className="col neumorphism"></div>
            <div className="col neumorphism">0</div>
            <div
              className="col neumorphism"
              style={{ backgroundColor: "orange" }}
            >
              =
            </div>
            <div
              className="col neumorphism"
              style={{ backgroundColor: "black", color: "white" }}
              onClick={() => {
                setOperator("-");
                performOperation();
              }}
            >
              -
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
