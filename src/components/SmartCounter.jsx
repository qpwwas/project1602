import React, { useEffect, useState } from "react";

export default function SmartCounter() {
  const MIN = 0;
  const MAX = 10;

  const [value, setValue] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (value === MAX) setMessage("Достигнуто максимальное значение (10).");
    else if (value === MIN) setMessage("Достигнуто минимальное значение (0).");
    else setMessage("");
  }, [value]);

  const inc = () => setValue((v) => (v < MAX ? v + 1 : v));
  const dec = () => setValue((v) => (v > MIN ? v - 1 : v));
  const reset = () => setValue(0);

  return (
    <div style={{ padding: 16, border: "1px solid #444", borderRadius: 12 }}>
      <h2 style={{ color: "white", marginTop: 0 }}>SmartCounter</h2>
      <p style={{ color: "rgba(255,255,255,0.7)" }}>
        Значение (0..10): <b>{value}</b>
      </p>

      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={dec} disabled={value === MIN}>Уменьшить</button>
        <button onClick={inc} disabled={value === MAX}>Увеличить</button>
        <button onClick={reset}>Сбросить</button>
      </div>

      {message && (
        <p style={{ marginTop: 12, color: "#7dd3fc" }}>{message}</p>
      )}
    </div>
  );
}
