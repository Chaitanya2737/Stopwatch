import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [time, settime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const ref =  useRef(null)

  useEffect(()=>{

    if (isRunning) {
     ref.current = setInterval(()=>{
        settime((prev) => prev+10)
      },10)
    }

    else if (!isRunning && ref.current){
      clearInterval(ref.current);
      ref.current =  null
    }

    return () => clearInterval(ref.current);
  },[isRunning])

  const handlestart = () =>{
    setIsRunning(true)
  }

  const handlereset= () => {
    setIsRunning(false)
    settime(0)
  }


  const formatdata = (time) =>{
    const data = (time/1000).toFixed(2)
    return data
  }


  return (
    <div className="App">
      <div>
        <h1>
          STOPWATCH
        </h1>
      </div>

      <div>
        <span>Time :  </span>
        <span>{formatdata(time)}</span>
      </div>
      <span>
        <button onClick={handlestart}>start</button>
        <button onClick={handlereset}>reset</button>
      </span>
    </div>
  );
}

export default App;
