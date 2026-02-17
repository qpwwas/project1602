import React, { useEffect, useMemo, useState } from "react";

export default function Register() {
  // useState: значения полей
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // общая валидность + успех отправки
  const [isValid, setIsValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // локальные ошибки (вычисление), чтобы не дублировать логику
  const errors = useMemo(() => {
    const nameErr =
      name.trim().length >= 3 ? "" : "Имя должно быть не менее 3 символов.";
    const emailErr = email.includes("@")
      ? ""
      : 'Email должен содержать символ "@".';
    const passErr =
      password.length >= 6 ? "" : "Пароль должен быть не менее 6 символов.";

    return { name: nameErr, email: emailErr, password: passErr };
  }, [name, email, password]);

  // useEffect: вычисляем общую валидность формы на основе ошибок
  useEffect(() => {
    const ok = !errors.name && !errors.email && !errors.password;
    setIsValid(ok);
  }, [errors]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    setSubmitted(true);

    // имитация успешной отправки
    setTimeout(() => {
      setName("");
      setEmail("");
      setPassword("");
    }, 600);
  };

  return (
    <div className="grid2">
      <div className="card">
        <div className="cardTitle">Регистрация</div>
        <div className="cardSubtitle">
          Реактивная валидация: useState + useEffect
        </div>

        <form className="form" onSubmit={onSubmit}>
          <label className="field">
            <span className="fieldLabel">Имя</span>
            <input
              className="input"
              value={name}
              onChange={(e) => {
                setSubmitted(false);
                setName(e.target.value);
              }}
              placeholder="Например: Ayan"
            />
            {name.length > 0 && errors.name && (
              <div className="error">{errors.name}</div>
            )}
          </label>

          <label className="field">
            <span className="fieldLabel">Email</span>
            <input
              className="input"
              value={email}
              onChange={(e) => {
                setSubmitted(false);
                setEmail(e.target.value);
              }}
              placeholder="name@example.com"
            />
            {email.length > 0 && errors.email && (
              <div className="error">{errors.email}</div>
            )}
          </label>

          <label className="field">
            <span className="fieldLabel">Пароль</span>
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => {
                setSubmitted(false);
                setPassword(e.target.value);
              }}
              placeholder="Минимум 6 символов"
            />
            {password.length > 0 && errors.password && (
              <div className="error">{errors.password}</div>
            )}
          </label>

          <button className="btn" type="submit" disabled={!isValid}>
            Создать аккаунт
          </button>

          {submitted && isValid && (
            <div className="successBox" style={{ marginTop: 14 }}>
              <span className="successDot" />
              <span>Успешно! Аккаунт создан (демо-режим).</span>
            </div>
          )}

          <div className="muted" style={{ marginTop: 8 }}>
            Кнопка активируется только при валидности всех полей.
          </div>
        </form>
      </div>

      <div className="card">
        <div className="cardTitle">Правила валидации</div>
        <div className="divider" />

        <div className="list">
          <div className="listItem">
            <div className="dot" />
            <div>
              <div className="listTitle">Имя</div>
              <div className="muted">Не менее 3 символов.</div>
            </div>
          </div>

          <div className="listItem">
            <div className="dot" />
            <div>
              <div className="listTitle">Email</div>
              <div className="muted">Содержит символ "@".</div>
            </div>
          </div>

          <div className="listItem">
            <div className="dot" />
            <div>
              <div className="listTitle">Пароль</div>
              <div className="muted">Не менее 6 символов.</div>
            </div>
          </div>
        </div>

        <div className="infoBox" style={{ marginTop: 14 }}>
          <span className="infoDot" />
          <span>
            Важно: мы не изменяем state напрямую — только через setState.
          </span>
        </div>
      </div>
    </div>
  );
}
