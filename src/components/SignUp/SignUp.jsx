import "../Login/Login";
import { useContext } from "react";
import { LoginContext } from "../LoginContainer/LoginContainer";

/* hacer customHook para formularios */
export default function SignUp() {
  const themeLogin = useContext(LoginContext);
  const {
    user,
    pass,
    phoneUser,
    setPhoneUser,
    mailUser,
    setMailUser,
    setUser,
    setPass,
    sendUser,
    newUser,
  } = themeLogin;
  function handleSubmit(e) {
    e.preventDefault();
    sendUser();
  }
  return (
    <div className="mh p-5 login">
      <h3 className="mb-5">Cree su nombre de usuario y contraseña</h3>
      <form onSubmit={newUser} className="Checkout ">
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
        <label className="mb-2">Teléfono</label>
        <input
          type="number"
          className="mb-4"
          value={phoneUser}
          onChange={(e) => setPhoneUser(e.target.value)}
        />
        <label className="mb-2">E-mail</label>
        <input
          type="email"
          className="mb-4"
          value={mailUser}
          onChange={(e) => setMailUser(e.target.value)}
        />
        <button onClick={(e) => handleSubmit(e)} className="btn-modern ">
          Registrarse
        </button>
      </form>
    </div>
  );
}
