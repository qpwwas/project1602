import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        "navLink " + (isActive ? "navLinkActive" : "")
      }
    >
      {children}
    </NavLink>
  );
}

export default function Layout() {
  return (
    <div className="appBg">
      <header className="header">
        <div className="container headerInner">
          <div className="brand">
            <div className="brandLogo">☁️</div>
            <div className="brandText">
              <div className="brandName">CloudBox</div>
              <div className="brandTag">Облачное хранилище</div>
            </div>
          </div>

          <nav className="nav">
            <NavItem to="/">Главная</NavItem>
            <NavItem to="/register">Регистрация</NavItem>
            <NavItem to="/dashboard">Dashboard</NavItem>
            <NavItem to="/upload">Загрузка</NavItem>
            <NavItem to="/settings">Настройки</NavItem>
            <NavItem to="/counter">Counter</NavItem>
          </nav>
        </div>
      </header>

      <main className="container main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <div className="muted">
            © {new Date().getFullYear()} CloudBox — учебный проект React
          </div>
          <div className="muted">useState • useEffect • cleanup • router</div>
        </div>
      </footer>
    </div>
  );
}
