import "./CartView.css";

function CartView({ id, title, img1, price, quantity, fn }) {
  return (
    <div key={id} className="container cartview d-flex">
      <div className=" col-md-2">
        <img src={img1} className="d-block " alt="img" />
      </div>
      <div className="col-md-3">
        <p> {title} </p>
      </div>
      <div className="p-3 col-md-3 d-flex cantPrice">
        <p>Cantidad: {quantity}</p>
        <p style={{ fontWeight: "bold" }}>${price}</p>
      </div>
      
        <button onClick={() => fn(id)} className="btn-delete">
          <i className="fa-solid fa-xmark"></i>
        </button>
      
    </div>
  );
}

export default CartView;
