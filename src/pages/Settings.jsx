import React from "react";
import WindowTracker from "../components/WindowTracker.jsx";

export default function Settings() {
  return (
    <div className="grid2">
      <div className="card">
        <div className="cardTitle">Настройки</div>
        <div className="cardSubtitle">Отслеживание внешних событий</div>

        <div className="divider" />

        <div className="muted">
          Компонент ниже подписывается на событие <b>resize</b> и
          корректно отписывается при размонтировании (cleanup).
        </div>
      </div>

      <WindowTracker />
    </div>
  );
}
