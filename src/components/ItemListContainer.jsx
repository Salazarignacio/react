import ItemList from "./ItemList/ItemList";
import Counter from "./counter/Counter";

function ItemListContainer({ greeting }) {
  return (
    <>
      <h1>Soy el ItemListContainer</h1>
      <h2>{greeting}</h2>
      <ItemList />
      <Counter stock={10} onAdd={() => console.log("hola")} />
    </>
  );
}

export default ItemListContainer;
