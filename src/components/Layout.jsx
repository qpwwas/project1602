import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ padding: 24, color: "white" }}>
      Layout работает ✅
      <div style={{ marginTop: 16 }}>
        <Outlet />
      </div>
    </div>
  );
}
