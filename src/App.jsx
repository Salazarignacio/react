import ItemList from "./components/ItemList/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";


import CheckoutContainer from "./components/CheckoutContainer/CheckoutContainer";

import CartContext from "./CartContext/CartContext";


function App() {

  

  return (
    <>
        <BrowserRouter>
      <CartContext>
          <NavBar />
          <Routes>
            <Route exact path="login" element={<Login/>}/>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="category/:userCategory" element={<ItemListContainer />} />
            <Route
              exact
              path="/cart/checkout"
              element={<CheckoutContainer />}
            />
            <Route
              exact
              path="/item/:userId"
              element={<ItemDetailContainer />}
            />
          </Routes>
      </CartContext>
        </BrowserRouter>
    </>
  );
}

export default App;
