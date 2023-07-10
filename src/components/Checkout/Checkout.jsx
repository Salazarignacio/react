function Checkout({ funcion, funcion2, name, phone, mail, setName, setPhone, setMail }) {


  return (
    <>
      <form onSubmit={funcion2}>
        <label>Nombre</label>
        <input
          type="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          id="name"
        />
        <label>Telefóno</label>
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
          type="mail"
          id="mail"
          value={mail}
          onChange={(e) => {
            setMail(e.target.value);
          }}
        />
      </form>
      <button className="btn btn-success" onClick={funcion}>
        Generar orden de compra
      </button>
    </>
  );
}

export default Checkout;
