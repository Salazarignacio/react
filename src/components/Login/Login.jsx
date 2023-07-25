import { Link } from "react-router-dom";
import "./Login.css";
import { useState, useContext, useEffect } from "react";
import { LoginContext } from "../LoginContainer/LoginContainer";

export default function Login() {
  const [error, setError] = useState(false);
  const themeLogin = useContext(LoginContext);
  const { user, pass, setUser, setPass, getUser, phoneUser } = themeLogin;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.length > 1 && pass.length > 1) {
      setError(false);

      getUser();

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
        {phoneUser}
        <input
          type="password"
          className="mb-4"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <div>
          <button className="btn-modern m-2 " onClick={(e) => handleSubmit(e)}>
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
