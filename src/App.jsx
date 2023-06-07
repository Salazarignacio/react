import ItemList from "./components/IteList/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
      {/* <div className="mb-5" style={{color: "white"}}>f</div> */}
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/itemlist" element={<ItemListContainer />} />
          <Route exact path="category/:userCategory" element={<ItemList />} />
          <Route exact path="/item/:userId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
