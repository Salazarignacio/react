import ItemList from "./components/ItemList/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { useState, createContext } from "react";

export const ThemeContext = createContext("fuera de contexto");
function App() {
  const [cart, setCart] = useState([]);
  const addItem = (prod) => {
    if (!isInCart(prod.id)) {
      setCart((prev) => [...prev, prod]);

      prod.stock = prod.stock - prod.quantity;
    } else {
      const searchProduct = cart.find((a) => a.id === prod.id);

      const ubication = cart.indexOf(searchProduct);
      /* console.log(cart[ubication].quantity); */
      cart[ubication].quantity += prod.quantity;
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  /*   const quant = (id) => {
    const searchProduct = cart.find((a) => a.id === id);
    const ubication = cart.indexOf(searchProduct);
    console.log(cart[ubication].quantity);
    cart[ubication].quantity += 100;
  }; */

  return (
    <>
      <ThemeContext.Provider value={[cart, addItem]}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemList />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="category/:userCategory" element={<ItemList />} />
            <Route
              exact
              path="/item/:userId"
              element={<ItemDetailContainer />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
