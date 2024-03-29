import { Link } from "react-router-dom";
import "./Checkout.css";
import { useState } from "react";

function Checkout({
  fn,
  fn2,
  name,
  phone,
  mail,
  mail2,
  setName,
  setPhone,
  setMail,
  setMail2,
}) {
  const [valid, setValid] = useState(false);
  const [error, setError] = useState(false);

  function check() {
    if (mail != mail2) {
      setError(true);
    } else if (mail.length > 0 && name.length > 0 && phone.length > 0) {
      setValid(true);
      setError(false);
    } else {
      setValid(false);
      setError(false);
    }
  }

  function validation(e) {
    e.preventDefault();
    fn();
  }

  return (
    <div className="mh ">
      <h3 className="mb-5">
        Ingrese sus datos para finalizar la orden{" "}
        <i className="fa-solid fa-cart-shopping"></i>
      </h3>
      <form className="Checkout" onSubmit={fn2}>
        <label className="mb-2">Nombre y Apellido</label>
        <input
          type="text"
          value={name}
          style={
            name.length > 0
              ? { backgroundColor: "white" }
              : { display: "block" }
          }
          onChange={(e) => {
            setName(e.target.value);
          }}
          onBlur={() => check()}
          id="name"
        />
        <label>Teléfono</label>
        <input
          type="number"
          id="phone"
          value={phone}
          style={
            phone.length > 0
              ? { backgroundColor: "white" }
              : { display: "block" }
          }
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          onBlur={() => check()}
        />
        <label>E-mail</label>
        <input
          type="email"
          id="mail"
          value={mail}
          style={
            mail.length && mail.includes("@") > 0
              ? { backgroundColor: "white" }
              : { display: "block" }
          }
          onChange={(e) => {
            setMail(e.target.value);
          }}
          onBlur={() => check()}
        />
        <label>Confrimar e-mail</label>
        <input
          type="email"
          id="mail2"
          value={mail2}
          style={
            mail2.length > 0 && mail2 == mail && mail2.includes("@")
              ? { backgroundColor: "white" }
              : { display: "block" }
          }
          onChange={(e) => setMail2(e.target.value)}
          onBlur={() => check()}
        />

        <button
          className="btn-modern"
          disabled={!valid}
          onClick={(e) => validation(e)}
        >
          Finalizar compra
        </button>
        <div className="divider">
        <div className="divider-right mb-4"></div>
        <div className="divider-center">O</div>
        <div className="divider-left mb-4"></div>

        </div>
        <Link to={"/login"}>
          <button className="btn-modern">Iniciar Sesion</button>
        </Link>
      </form>
      {error && <p>El e-mail no coincide con la confirmación</p>}
    </div>
  );
}

export default Checkout;
