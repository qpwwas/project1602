import React, { useEffect, useState } from "react";

export default function WindowTracker() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const onResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", onResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="card">
      <div className="cardTitle">WindowTracker</div>
      <div className="cardSubtitle">resize + cleanup в useEffect</div>

      <div className="divider" />

      <div className="row gap">
        <div className="badge">Width: {size.width}px</div>
        <div className="badge">Height: {size.height}px</div>
      </div>

      <div className="muted" style={{ marginTop: 12 }}>
        Попробуй изменить размер окна — значения обновятся.
      </div>
    </div>
  );
}
