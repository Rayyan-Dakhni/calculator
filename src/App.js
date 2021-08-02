import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="calculator-screen neumorphism">
        <div className="screen neumorphism">
          <p className="answer-screen">10</p>
        </div>
        <div className="button-holder neumorphism">
          <div className="row">
            <div className="col neumorphism">7</div>
            <div className="col neumorphism">8</div>
            <div className="col neumorphism">9</div>
            <div className="col neumorphism">AC</div>
          </div>
          <div className="row">
            <div className="col neumorphism">7</div>
            <div className="col neumorphism">8</div>
            <div className="col neumorphism">9</div>
            <div className="col neumorphism">*</div>
          </div>
          <div className="row">
            <div className="col neumorphism">4</div>
            <div className="col neumorphism">5</div>
            <div className="col neumorphism">6</div>
            <div
              className="col neumorphism"
              style={{ backgroundColor: "black", color: "white" }}
            >
              /
            </div>
          </div>
          <div className="row">
            <div className="col neumorphism">1</div>
            <div className="col neumorphism">2</div>
            <div className="col neumorphism">3</div>
            <div
              className="col neumorphism"
              style={{ backgroundColor: "black", color: "white" }}
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
