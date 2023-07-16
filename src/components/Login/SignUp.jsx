import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function SignUp({user, pass, setUser, setPass, funcion, funcion2}) {
  function handleSubmit(e){
    e.preventDefault();
    funcion()
  }
  return (
    <div className="mh p-5 login">
      <form onSubmit={funcion2} className="Checkout " >
        <label className="mb-2">Usuario</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <label className="mb-2">Contraseña</label>
        <input
          type="password"
          className="mb-4"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={handleSubmit} className="btn-modern ">Registrarse</button>
      </form>
    </div>
  );
}
