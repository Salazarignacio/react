import { useState } from "react";
import "./Counter.css";

function Counter({ stock, onAdd }) {
  const [count, setCount] = useState(0);
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
          >
            -
          </button>
          <h4>{count}</h4>
          <button
            type="button"
            className="btn btn-success"
            onClick={incrementar}
          >
            +
          </button>
        </div>

        <button
          type="button"
          className="btn btn-success"
          onClick={onAdd}
          disabled={!stock2}
        >
          Agregar Carrito
        </button>
      </div>
      <div></div>
    </>
  );
}

export default Counter;
