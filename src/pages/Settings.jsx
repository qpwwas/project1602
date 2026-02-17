import React from "react";
import WindowTracker from "../components/WindowTracker.jsx";

export default function Settings() {
  return (
    <div className="grid2">
      <div className="card">
        <div className="cardTitle">Настройки</div>
        <div className="cardSubtitle">
          Отслеживание внешних событий браузера
        </div>

        <div className="divider" />

        <div className="muted">
          Компонент реагирует на изменение размеров окна браузера и корректно
          очищает обработчик события при размонтировании.
        </div>
      </div>

      <WindowTracker />
    </div>
  );
}
