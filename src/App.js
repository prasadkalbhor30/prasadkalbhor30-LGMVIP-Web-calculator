import './App.css';
import { useState } from 'react';
function App() {
  const [p, setp] = useState(0);
  const [input, setinput] = useState("");


  const clickHandler = (event) => {
    if (p === 1) {
      cleardisplay();
      setp(0);
      setinput(event.target.value)
    }
    else
      setinput(input.concat(event.target.value))

  }
  const operatorHandler = (event) => {
    setinput(input.concat(event.target.value))
    setp(0);
  }
  const cleardisplay = () => {
    console.log("im on")
    setinput("");
  }

  const calculate = () => {
    try {
      setinput(String(eval(input)))
      setp(1);
    }
    catch (err) { }
  }
  const backspace = () => {
    setinput(input.slice(0, input.length - 1))
  }



  return (
    <div className="container">
      <div class="title">
      <h1>CALCULATOR</h1>
      </div>
      <div className="main">
        <div className="top">
          <div className="top-left">
            <input type="text" value={input} placeholder="0" />
            <i onClick={backspace} className="fa fa-solid fa-delete-left icon"></i>
          </div>
          <div className="top-right">
            <input type="button" onClick={cleardisplay} className="right-btn color" value="C" />
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-left">
            <div className="btn-block">
              <input type="button" onClick={clickHandler} className="left-btn" value="1" />
              <input type="button" onClick={clickHandler} className="left-btn" value="2" />
              <input type="button" onClick={clickHandler} className="left-btn" value="3" />
            </div>
            <div className="btn-block">
              <input type="button" onClick={clickHandler} className="left-btn" value="4" />
              <input type="button" onClick={clickHandler} className="left-btn" value="5" />
              <input type="button" onClick={clickHandler} className="left-btn" value="6" />
            </div>
            <div className="btn-block">
              <input type="button" onClick={clickHandler} className="left-btn" value="7" />
              <input type="button" onClick={clickHandler} className="left-btn" value="8" />
              <input type="button" onClick={clickHandler} className="left-btn" value="9" />
            </div>
            <div className="btn-block">
              <input type="button" onClick={clickHandler} className="left-btn" value="." />
              <input type="button" onClick={clickHandler} className="left-btn" value="0" />
              <input type="button" onClick={calculate} className="left-btn color" value="=" />
            </div>
          </div>
          <div className="bottom-right">
            <div className="btn-block">
              <input type="button" onClick={operatorHandler} className="right-btn" value="+" />
            </div>
            <div className="btn-block">
              <input type="button" onClick={operatorHandler} className="right-btn" value="-" />
            </div>
            <div className="btn-block">
              <input type="button" onClick={operatorHandler} className="right-btn" value="/" />
            </div>
            <div className="btn-block">
              <input type="button" onClick={operatorHandler} className="right-btn" value="*" />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
