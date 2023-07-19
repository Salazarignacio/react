import { LoginContext } from "../LoginContainer/LoginContainer";
import { useContext } from "react";

export default function CheckouLogged({ fn, fn2 }) {
  const themeLogin = useContext(LoginContext);
  const { user } = themeLogin;

  function validation(e) {
    e.preventDefault();
    fn();
  }
  return (
    <>
      <form className="Checkout mh" onSubmit={fn2}>
        <h1>{user} Finalizar orden de compra</h1>
        <button className="btn-modern"  onClick={(e) => validation(e)}>Finalizar Compra</button>
      </form>
    </>
  );
}
