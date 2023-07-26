import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { baseDatos } from "../../firebase/firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import Loading from "../Loading/Loading";
import Item from "../Item/Item";

export default function SearchProductContainer() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [render, setRender] = useState("");

  useEffect(() => {
    const productRef = collection(baseDatos, "baseDatos");

    getDocs(productRef).then((snapChat) => {
      setProducts(snapChat.docs.map((a) => ({ id: a.id, ...a.data() })));
    });
  }, [search]);

  const searching = (e) => {
    e.preventDefault();
    const rta = products.filter((a) => a.title.includes(search.toUpperCase()));
    rta?
    setRender(
      rta.map((a) => {
        return (
          <Item
            key={a.id}
            id={a.id}
            title={a.title}
            img={a.img.img1}
            category={a.category}
          ></Item>
        );
      })
    ):setRender("");
  };
  return (
    <>
      <form className="Checkout" onSubmit={(e) => searching(e)}>
        <h3 className="mb-5">Busque el nombre de su producto</h3>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyUp={(e) => searching(e)}
        />
        <button className="btn-modern mb-5">Buscar</button>
      </form>
      {render}
    </>
  );
}
