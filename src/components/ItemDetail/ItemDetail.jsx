import "./ItemDetail.css";
import ItemCount from "../counter/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";

const Finalizada = ({ onAdd }) => {
  /*poner un estado para la cantidad */

  return (
    <>
      <h2>Compra Finalizada</h2>;<p>La cantidad es </p>
    </>
  );
};

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
  const [change, setChange] = useState("B");
  function cambio(par) {
    let component;
    change == "A" ? (component = "B") : (component = "A");
    setChange(component);
    console.log(par);
    return par;
  }
  const Count = change == "B" ? ItemCount : Finalizada;

  return (
    <div key={id} className="ItemDetail container-md p-4">
      <div className="detailLeft">
        <h3>{title}</h3>

        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block " alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block " alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block " alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="detailRight">
        <p className="price">${price}</p>
        <p>{description}</p>
        <Count stock={stock} onAdd={cambio} />
        <Link to="/cart">
          <button type="button" className="btn btn-success">
            Finalizar Compra
          </button>
        </Link>
      </div>
    </div>
  );
}
