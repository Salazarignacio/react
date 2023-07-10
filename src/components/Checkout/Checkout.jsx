import './Checkout.css'

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
  function validation(){
    const idMail = document.getElementById("mail")
    const idMail2 = document.getElementById("mail2")
    if(idMail.value == idMail2.value){
      funcion()
    } else alert("Revisar la confirmacion Email")
  }

  return (
    <>
    <h3>Ingrese sus datos para poder registrar la orden</h3>
      <form className='Checkout' onSubmit={funcion2}>
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
        <input
        type="email" id="mail2"/>
      </form>
      <button className="btn btn-success" onClick={validation}>
        Generar orden de compra
      </button>
    </>
  );
}

export default Checkout;
