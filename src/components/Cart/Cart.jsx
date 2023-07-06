import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../CartContext/CartContext";
import CartView from "../CartView/CartView";

function Cart() {
  const [total2, setTotal2] = useState(0);
  const [state, setState] = useState(true);
  const theme = useContext(ThemeContext);
  const data = theme[0];

  
  const total = theme[4]; /* funcion del total "getTotal" */

  const del = (id) => {
    let busqueda = data.map((el) => el.id).indexOf(id);
    data.splice(busqueda, 1);
    setState(!state);
    setTotal2(total)
  };

  return (
    <div>
      {data.length < 1 && <h1>El carrito esta vacío</h1>}
      <div>
        {data.map((a) => {
          return (
            <CartView
              key={a.id}
              id={a.id}
              quantity={a.quantity}
              title={a.title}
              img1={a.img1}
              price={a.price}
              fn={del}
              
            ></CartView>
            
          );
        })}
        total2 {total2} total {total}
        <Link to={"/cart/checkout"}>
          <button className="btn btn-primary">Checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
