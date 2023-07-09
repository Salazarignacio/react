import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../CartContext/CartContext";
import CartView from "../CartView/CartView";

function Cart() {
  const [state, setState] = useState(true);
  const theme = useContext(ThemeContext);
  const cart = theme[0];
  

  const getTotal = () => {
    let total = 0;

    cart.forEach((prod) => {
      total += prod.quantity * prod.price;
    });

    return total;
  };

  const total = getTotal();

  const del = (id) => {
    let busqueda = cart.map((el) => el.id).indexOf(id);
    cart.splice(busqueda, 1);
    setState(!state);
  };

  return (
    <div>
      {cart.length < 1 && <h1>El carrito esta vacío</h1>}
      <div>
        {cart.map((a) => {
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
        {total}

        <Link to={"/cart/checkout"}>
          <button className="btn btn-primary">Checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
