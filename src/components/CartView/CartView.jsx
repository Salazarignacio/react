function CartView({ id, title, img1, price, quantity, fn }) {
  return (
    <div key={id} className="">
      <p> {title} </p>
      <img src={img1} className="d-block " alt="img" />
      <p>{price}</p>
      <p>Cantidad: {quantity}</p>
      <button onClick={() => fn(id)} className="btn btn-primary">
        Eliminar
      </button>
    </div>
  );
}

export default CartView;
