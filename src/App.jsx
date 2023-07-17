import ItemList from "./components/ItemList/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";



import CheckoutContainer from "./components/CheckoutContainer/CheckoutContainer";

import CartContext from "./CartContext/CartContext";
import SignUpContainer from "./components/SignUpContainer/SignUpContainer";
import LoginContainer from "./components/LoginContainer/LoginContainer";


function App() {

  

  return (
    <>
        <BrowserRouter>
        <LoginContainer>
      <CartContext>
          <NavBar />
          <Routes>
            <Route exact path="/login" element={<LoginContainer/>}/>
            <Route exact path="/newuser" element={<SignUpContainer/>}/>
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
      </LoginContainer>
        </BrowserRouter>
    </>
  );
}

export default App;
