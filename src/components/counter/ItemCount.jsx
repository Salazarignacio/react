import { useState } from "react";
import "./Counter.css";

function ItemCount({ stock, onAdd, quantity }) {
  const [count, setCount] = useState(quantity); /*<<-- aca no es 0 */
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
      <div className="Counter">
        <div>
          <h3>Camisa</h3>
        </div>

        <div>
          <p>Stock: {stock2}</p>
        </div>

        <div className="buttons mb-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={decrementar}
            disabled={!count}
          >
            -
          </button>
          <h4>{count}</h4>
          <button
            type="button"
            className="btn btn-success"
            onClick={incrementar}
            disabled={!stock2}
          >
            +
          </button>
        </div>

        <button
          type="button"
          className="btn btn-success "
          onClick={()=>onAdd(count)} /* <<--aca */
          disabled={!count}
        >
          Agregar Carrito
        </button>
      </div>


      <div></div>
    </>
  );
}

export default ItemCount;
