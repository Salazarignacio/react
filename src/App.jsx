import ItemList from "./components/ItemList/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import Practicas from './components/Practicas' */
import Cart from "./components/Cart/Cart";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* <Practicas/> */}
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="category/:userCategory" element={<ItemList />} />
          <Route exact path="/item/:userId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
