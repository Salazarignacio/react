import "./ItemDetail.css";
import ItemCount from "../counter/ItemCount";
import Finalizada from "./Finalizada";
import { useState, createContext } from "react";
import { ThemeContext } from "../../CartContext/CartContext";
import { useContext } from "react";
import Carousel from "./Carousel";

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
  const objImg = { img1, img2, img3 };

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
    changeComponent();
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

  return (
    <div key={id} className="ItemDetail p-5">
      <div className="detailLeft">
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
