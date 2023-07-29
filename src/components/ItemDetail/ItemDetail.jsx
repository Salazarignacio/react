import "./ItemDetail.css";
import ItemCount from "../counter/ItemCount";
import Finalizada from "./Finalizada";
import { useState, createContext, useEffect } from "react";
import { useContext } from "react";
import Carousel from "./Carousel";
import { ThemeContext } from "../../Context/CartContext";
import { ThemeContextFav } from "../../Context/FavContext";

export const ImgContext = createContext("imagenes");

export default function ItemDetail({
  id,
  img1,
  img2,
  img3,
  title,
  description,
  price,
  stock,
}) {
  const theme = useContext(ThemeContext);
  const themeFav = useContext(ThemeContextFav);
  const objImg = { img1, img2, img3 };
  const { addFav, del, fav } = themeFav;

  const handleOnAdd = (quantity) => {
    const objProduct = {
      id,
      title,
      price,
      quantity,
      stock,
      img1,
    };

    addItem(objProduct);
    del(id)
    changeComponent();
  };

  const handleOnFav = (quantity) => {
    const objProduct = {
      id,
      title,
      price,
      stock,
      img1,
      quantity,
    };

    addFav(objProduct);
  };

  const [, addItem] = theme;

  const [change, setChange] = useState(true);
  function changeComponent(par) {
    let component;
    change == false ? (component = true) : (component = false);
    setChange(component);
    return par;
  }
  const Count = change ? ItemCount : Finalizada;
  const buscar = (id) => {
    let isInFavs = fav.find((el) => el.id == id);

    return isInFavs;
  };
  return (
    <div key={id} className="ItemDetail p-5">
      <div className="detailLeft ">
        <div>

        </div>
        <div className="favoritos">
          {buscar(id) ? (
            <i
              onClick={handleOnFav}
              className={"icon fav fa-solid fa-heart"}
            ></i>
          ) : (
            <i
              onClick={handleOnFav}
              className={"icon fav fa-regular fa-heart"}
            ></i>
          )}
        </div>
        <ImgContext.Provider value={objImg}>
          <Carousel />
        </ImgContext.Provider>
      </div>
      <div className="detailRight">
        <h3>{title}</h3>

        <p>{description}</p>

        <Count
          price={price}
          title={title}
          stock={stock <= 0 ? "Producto sin stock" : stock}
          onAdd={handleOnAdd}
          quantity={stock > 0 ? 1 : "-"}
        />
      </div>
    </div>
  );
}
