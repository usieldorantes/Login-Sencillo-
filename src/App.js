import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [email, setEmail] = useState('');
  const [pasword, setPasword] = useState('');
  const errorMensaje = validar(email, pasword);
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        login(email, pasword);
      }}
    >
      <input
        type="texto"
        name="email"
        placeholder="Email"
        autoCoplete="off"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
      ></input>
      <input
        type="password"
        name="password"
        placeholder="Pasword"
        autoCoplete="off"
        value={pasword}
        onChange={(ev) => setPasword(ev.target.value)}
      ></input>
      <p>{errorMensaje}</p>
      <button type="submit" desable={errorMensaje}>
        Iniciar Sesión
      </button>
    </form>
  );
}
const login = (email, password) => {
  if (email === 'usiel@gmail.com' && password === '1234')
    alert('Inicio de sesion Correcta');
  else alert('Error de sesion');
};
const validar = (email, password) => {
  if (!email.includes('@')) return 'error en el email';
  if (password.length < 4) return 'error en el password';
};
