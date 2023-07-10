import "./CartWidget.css";
import { ThemeContext } from "../../CartContext/CartContext";
import { useContext } from "react";

function CartWidget() {
  const theme = useContext(ThemeContext);
  const [,,,total] = theme
  console.log(total)
  return (
    <div className="cart">
      <button type="button" className="btn btn-outline-light">
        <i className="fa-solid fa-cart-shopping icon"></i>
        <span className="cartCant">{total}</span>
      </button>
    </div>
  );
}

export default CartWidget;
