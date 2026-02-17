import React, { useEffect, useMemo, useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isValid, setIsValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    return {
      name: name.trim().length >= 3 ? "" : "Имя должно быть не менее 3 символов.",
      email: email.includes("@") ? "" : 'Email должен содержать символ "@".',
      password:
        password.length >= 6 ? "" : "Пароль должен быть не менее 6 символов."
    };
  }, [name, email, password]);

  useEffect(() => {
    const ok = !errors.name && !errors.email && !errors.password;
    setIsValid(ok);
  }, [errors]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    setSubmitted(true);

    setTimeout(() => {
      setName("");
      setEmail("");
      setPassword("");
    }, 600);
  };

  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      <h1 style={{ color: "white" }}>Регистрация</h1>
      <p style={{ color: "rgba(255,255,255,0.7)" }}>
        Реактивная валидация: useState + useEffect
      </p>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: 12, marginTop: 16 }}>
        <label style={{ display: "grid", gap: 6 }}>
          <span style={{ color: "rgba(255,255,255,0.7)" }}>Имя</span>
          <input
            value={name}
            onChange={(e) => {
              setSubmitted(false);
              setName(e.target.value);
            }}
            placeholder="Например: Ayan"
            style={{ padding: 10, borderRadius: 10 }}
          />
          {name.length > 0 && errors.name && (
            <span style={{ color: "#ff6b6b" }}>{errors.name}</span>
          )}
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span style={{ color: "rgba(255,255,255,0.7)" }}>Email</span>
          <input
            value={email}
            onChange={(e) => {
              setSubmitted(false);
              setEmail(e.target.value);
            }}
            placeholder="name@example.com"
            style={{ padding: 10, borderRadius: 10 }}
          />
          {email.length > 0 && errors.email && (
            <span style={{ color: "#ff6b6b" }}>{errors.email}</span>
          )}
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span style={{ color: "rgba(255,255,255,0.7)" }}>Пароль</span>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setSubmitted(false);
              setPassword(e.target.value);
            }}
            placeholder="Минимум 6 символов"
            style={{ padding: 10, borderRadius: 10 }}
          />
          {password.length > 0 && errors.password && (
            <span style={{ color: "#ff6b6b" }}>{errors.password}</span>
          )}
        </label>

        <button
          type="submit"
          disabled={!isValid}
          style={{
            padding: 12,
            borderRadius: 12,
            fontWeight: 800,
            cursor: isValid ? "pointer" : "not-allowed"
          }}
        >
          Создать аккаунт
        </button>

        {submitted && isValid && (
          <div style={{ color: "#4ade80", fontWeight: 700 }}>
            ✅ Успешно! Аккаунт создан (демо-режим).
          </div>
        )}
      </form>
    </div>
  );
}
