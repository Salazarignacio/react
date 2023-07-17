import { useState, createContext } from "react";

export const ThemeContext = createContext("");

function CartContext({ children }) {
  const [cart, setCart] = useState([]);
  const [state, setState] = useState(true);

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

  const del = (id) => {
    let busqueda = cart.map((el) => el.id).indexOf(id);
    cart.splice(busqueda, 1);
    setState(!state);
  };

  /* ---------------------------------------------------------------------------------- */
  const clearCart = () => {
    cart.splice(0);
    setState(!state);
  };
  const addItem = (prod) => {
    if (!isInCart(prod.id)) {
      setCart((prev) => [...prev, prod]);

      prod.stock = prod.stock - prod.quantity;
    } else {
      const searchProduct = cart.find((a) => a.id === prod.id);

      const index = cart.indexOf(searchProduct);

      cart[index].quantity += prod.quantity;
      setState(!state);
    }
  };

  const isInCart = (id) => {
    return cart.some((a) => a.id === id);
  };
  return (
    <>
      <ThemeContext.Provider
        value={[cart, addItem, isInCart, totalQuantity, total, del, clearCart]}
      >
        {children}
      </ThemeContext.Provider>
    </>
  );
}

export default CartContext;
