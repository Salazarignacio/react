import { useState, createContext } from "react";

export const ThemeContext = createContext("");

function CartContext({ children }) {
  const [cart, setCart] = useState([]);

  /* ---------------------------------------------------------------------------------- */
  const getTotalQuantity = () => {
    let totalQuantity = 0;

    cart.forEach((prod) => {
      totalQuantity += prod.quantity;
    });

    return totalQuantity;
  };

  const totalQuantity = getTotalQuantity();

  const getTotal = () => {
    let total = 0;

    cart.forEach((prod) => {
      total += prod.quantity * prod.price;
    });

    return total;
  };

  const total = getTotal();

  /* ---------------------------------------------------------------------------------- */

  const addItem = (prod) => {
    if (!isInCart(prod.id)) {
      setCart((prev) => [...prev, prod]);

      prod.stock = prod.stock - prod.quantity;
    } else {
      const searchProduct = cart.find((a) => a.id === prod.id);

      const index = cart.indexOf(searchProduct);

      cart[index].quantity += prod.quantity;
    }
  };

  const isInCart = (id) => {
    return cart.some((a) => a.id === id);
  };
  return (
    <>
      <ThemeContext.Provider
        value={[cart, addItem, isInCart, totalQuantity, total]}
      >
        {children}
      </ThemeContext.Provider>
    </>
  );
}

export default CartContext;
