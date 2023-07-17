import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";



export default function Login({ user, pass, setUser, setPass, fn, fn2}) {
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.length > 1 && pass.length > 1) {
      setError(false);
      fn2()
    } else {
      setError(true);
    }
  };

  return (
    <div className="mh  p-5 login ">
      <h3 className="mb-5">Ingrese nombre de usuario, o cree una cuenta</h3>
      <form className="Checkout ">
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
        <div>
          <button className="btn-modern m-2 " onClick={(e)=>handleSubmit(e)}>
            Iniciar Sesion
          </button>
          <Link to={"/newuser"}>
            <button className="btn-modern m-2">Crear Usuario</button>
          </Link>
        </div>
      </form>
      {error && <p>Campos incompletos</p>}
    </div>
  );
}
