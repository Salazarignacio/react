import { useState, createContext } from "react";

export const ThemeContext = createContext("");



function CartContext({ children }) {
  const [cart, setCart] = useState([]);

  

  const addItem = (prod) => {
    if (prod != undefined) {
      if (!isInCart(prod.id)) {
        setCart((prev) => [...prev, prod]);

        prod.stock = prod.stock - prod.quantity;
      } else {
        const searchProduct = cart.find((a) => a.id === prod.id);

        const ubication = cart.indexOf(searchProduct);
        
        cart[ubication].quantity += prod.quantity;
      }
    }
  };

  const isInCart = (id) => {
    return cart.some((a) => a.id === id);
  };
  return (<>
  <ThemeContext.Provider value={[cart, addItem, isInCart]}>
  {children}
  </ThemeContext.Provider>
  </>
  )
}

export default CartContext;
