import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Soy la prop Greeting" />
    </>
  );
}

export default App;
