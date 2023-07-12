import { useState } from "react";
import "./Counter.css";

function ItemCount({ price, stock, onAdd, quantity }) {
  const [count, setCount] = useState(quantity); 
  const [stock2, setStock2] = useState(stock);

  function incrementar() {
    if (count < stock) {
      setCount(count + 1);
      setStock2(stock2 - 1);
    }
  }
  function decrementar() {
    if (count > 0) {
      setCount(count - 1);
      setStock2(stock2 + 1);
    }
  }

  return (
    <>
      <div className="Counter p-3">
        <div>
          <h3>$ {price}</h3>
        </div>

        <div>
          <p>Stock: {stock2}</p>
        </div>

        <div className="buttons mb-2">
          <button
            type="button"
            className="btn-modern"
            onClick={decrementar}
            disabled={!count}
          >
          <i className="fa-solid fa-caret-left"></i>
          </button>
          <h4>{count}</h4>
          <button
            type="button"
            className="btn-modern"
            onClick={incrementar}
            disabled={stock2=="Producto sin stock"}
          >
            <i className="fa-solid fa-caret-right"></i>
          </button>
        </div>

        <button
          type="button"
          className="btn-modern "
          onClick={()=>onAdd(count)} 
          disabled={!count}
        >
          Agregar al Carrito
        </button>
      </div>


      <div></div>
    </>
  );
}

export default ItemCount;
