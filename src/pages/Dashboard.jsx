import React from "react";
import SmartCounter from "../components/SmartCounter.jsx";

export default function Dashboard() {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ color: "white" }}>Dashboard</h1>
      <p style={{ color: "rgba(255,255,255,0.7)" }}>
        Лимит бесплатного тарифа: 0..10 файлов (пример).
      </p>

      <SmartCounter />
    </div>
  );
}
