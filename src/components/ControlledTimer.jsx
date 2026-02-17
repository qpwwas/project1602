import React, { useEffect, useRef, useState } from "react";

export default function ControlledTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning]);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="card">
      <div className="cardTitle">ControlledTimer</div>
      <div className="cardSubtitle">
        Управляемый таймер с cleanup (useEffect)
      </div>

      <div className="timerValue">{seconds} сек</div>

      <div className="row gap">
        <button className="btn" onClick={start} disabled={isRunning}>
          Старт
        </button>
        <button className="btn" onClick={pause} disabled={!isRunning}>
          Пауза
        </button>
        <button className="btnGhost" onClick={reset}>
          Сброс
        </button>
      </div>
    </div>
  );
}
