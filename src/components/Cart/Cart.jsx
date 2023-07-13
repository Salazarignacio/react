import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../CartContext/CartContext";
import CartView from "../CartView/CartView";

function Cart() {
  const theme = useContext(ThemeContext);
  const cart = theme[0];
  const [, , , , , del] = theme;
  const [, , , , total] = theme;
  return (
    <div>
      {cart.length < 1 && <h1>El carrito esta vacío</h1>}
      
      <div className="mh">
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
        <h3 style={total<1?{display: "none"}:{display:"block"}}>${total}</h3>

        <Link disabled={total<1} to={"/cart/checkout"}>
          <button className="btn-modern" style={total<1?{display: "none"}:{display: "block"}}>Confirmar Compra</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
