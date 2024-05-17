import React from 'react'
import { useEffect, useRef, useState } from 'react';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      if (isRunning) {
        ref.current = setInterval(() => {
          setTime((prev) => prev + 10);
        }, 10);
      } else if (!isRunning && ref.current) {
        clearInterval(ref.current);
        ref.current = null;
      }
  
      return () => clearInterval(ref.current);
    }, [isRunning]);
  
    const handleStart = () => {
      setIsRunning(true);
    };
  
    const handleReset = () => {
      setIsRunning(false);
      setTime(0);
    };
  
    const formatData = (time) => {
      const seconds = (time / 1000).toFixed(2);
      return seconds;
    };
  
    return (
      <div className="App">
        <div>
          <h1>STOPWATCH</h1>
        </div>
  
        <div>
          <span>Time: </span>
          <span>{formatData(time)}</span>
        </div>
        <span>
          <button onClick={handleStart}>start</button>
          <button onClick={handleReset}>reset</button>
        </span>
      </div>
    );
}

export default Stopwatch