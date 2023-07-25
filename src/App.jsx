import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";

import CheckoutContainer from "./components/CheckoutContainer/CheckoutContainer";
import UploadContainer from "./components/UploadContainer/UploadContainer";
import CartContext from "./CartContext/CartContext";
import SignUpContainer from "./components/SignUpContainer/SignUpContainer";
import LoginContainer from "./components/LoginContainer/LoginContainer";
import SearchProductContainer from "./components/SearchProductContainer/SearchProductContainer";


function App() {

  

  return (
    <>
        <BrowserRouter>
        <LoginContainer>
      <CartContext>
          <NavBar />
          <Routes>
            <Route exact path="/search" element={<SearchProductContainer/>}/>
            <Route exact path="/upload" element={<UploadContainer/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/newuser" element={<SignUp/>}/>
            <Route exact path="/" element={<ItemListContainer />} />{/* ojo aca que hicimos cambios */}
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
