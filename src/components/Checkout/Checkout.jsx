import "./Checkout.css";
import { useState } from "react";

function Checkout({
  funcion,
  funcion2,
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

  function check(e) {
     if (mail == mail2 && mail.length > 0) {
      setValid(true);
    } else setValid(false); /* poner notificacion que dure poquito */
  }
  function validation(e) {
    e.preventDefault();
    funcion();
  }

  return (
    <>
      <h3>Ingrese sus datos para poder registrar la orden</h3>
      <form className="Checkout" onSubmit={funcion2}>
        <label>Nombre</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          
          id="name"
        />
        <label>Teléfono</label>
        <input
          type="number"
          id="phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <label>E-mail</label>
        <input
          type="email"
          id="mail"
          value={mail}
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
          onChange={(e) => setMail2(e.target.value)}
          onBlur={() => check()}
        />

        <button
          className="btn btn-success"
          disabled={!valid}
          onClick={(e) => validation(e)}
        >
          Finalizar compra
        </button>
      </form>
    </>
  );
}

export default Checkout;
