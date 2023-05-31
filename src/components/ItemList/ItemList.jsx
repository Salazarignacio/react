import Mock from "../../Mock";
import { useEffect, useState } from "react";
import Item from "../Item/Item";

function ItemList() {
  const [pet, setPet] = useState([]);

  useEffect(() => {
    Mock().then((data) => {
      setPet(data);
    });
  }, []);

  return (
    <div>
      {" "}
      {pet.map((a) => {
        return <Item key={a.id} nombre={a.nombre} id={a.id}></Item>;
      })}
    </div>
  );
}

export default ItemList;
