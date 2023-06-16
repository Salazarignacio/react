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
    setCart((prev) => [...prev, prod]);
  };

  return (
    <>
      <ThemeContext.Provider value={[cart, addItem]}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
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
