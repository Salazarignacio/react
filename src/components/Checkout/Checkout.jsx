import "./Checkout.css";
import { useState } from "react";

function Checkout({
  funcion,
  funcion2,
  name,
  phone,
  mail,
  setName,
  setPhone,
  setMail,
}) {
  const [valid, setValid] = useState(false)
  const idMail = document.getElementById("mail");
  const idMail2 = document.getElementById("mail2");
  const idName = document.getElementById("name");
  const idPhone = document.getElementById("phone");
  function chequeo(e){
    e.preventDefault();
    if (
      idMail.value == idMail2.value &&
      idName.value.length > 1 &&
      idPhone.value.length > 1
    ) {
       setValid(true); 
    } else if (idMail.value != idMail2.value) {
      alert("Revisar la confirmacion Email");
    } else if (idName.value.length < 3) {
      alert("Ingresar un nombre mayor a 3 caracteres");
    } else if (idPhone.value.length < 3){
      alert("Ingrese un nro de teléfono valido")
    }
  }
  function validation(e) {
    e.preventDefault();
    funcion()
    
  }

  return (
    <>
      <h3>Ingrese sus datos para poder registrar la orden</h3>
      <form className="Checkout" onSubmit={funcion2}>
        <label>Nombre</label>
        <input
          type="name"
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
        />
        <label>Confrimar e-mail</label>
        <input type="email" id="mail2" />
        <button onClick={(e)=>{chequeo(e)}} className="btn btn-success">Chequeo</button>
        <button className="btn btn-success" disabled={!valid} onClick={(e) => validation(e)}>
          Generar orden de compra
        </button>
      </form>
    </>
  );
}

export default Checkout;
