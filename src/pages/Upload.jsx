import React from "react";
import ControlledTimer from "../components/ControlledTimer.jsx";

export default function Upload() {
  return (
    <div className="grid2">
      <div className="card">
        <div className="cardTitle">Загрузка файлов</div>
        <div className="cardSubtitle">
          Имитация процесса загрузки через таймер
        </div>

        <div className="divider" />

        <div className="muted">
          В реальном облачном сервисе таймер может отображать длительность
          загрузки файла или оставшееся время.
        </div>
      </div>

      <ControlledTimer />
    </div>
  );
}
