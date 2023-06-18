import "./ItemDetail.css";
import ItemCount from "../counter/ItemCount";
import Finalizada from "./Finalizada";
import { useState, createContext } from "react";
import { ThemeContext } from "../../App";
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
      img1
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
    <div key={id} className="ItemDetail container-md p-4">
      <div className="detailLeft">
        <h3>{title}</h3>
        <ImgContext.Provider value={objImg}>
          <Carousel />
        </ImgContext.Provider>
      </div>
      <div className="detailRight">
        <p className="price">${price}</p>
        <p>{description}</p>

        <Count stock={stock} onAdd={handleOnAdd} quantity={0} />
      </div>
    </div>
  );
}
