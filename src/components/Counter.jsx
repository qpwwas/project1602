import React, { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Компонент Counter смонтирован");
  }, []);

  useEffect(() => {
    console.log("Значение счётчика изменилось:", count);
  }, [count]);

  return (
    <div className="card">
      <div className="cardTitle">Counter</div>
      <div className="cardSubtitle">useEffect: mount + update</div>

      <div className="timerValue">{count}</div>

      <div className="row gap">
        <button className="btn" onClick={() => setCount((c) => c + 1)}>
          +
        </button>
        <button className="btnGhost" onClick={() => setCount((c) => c - 1)}>
          –
        </button>
      </div>
    </div>
  );
}
