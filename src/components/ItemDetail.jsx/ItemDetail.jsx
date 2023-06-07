import "./ItemDetail.css";
import Counter from "../counter/Counter";

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
        <Counter stock={stock} onAdd={() => console.log("hola")} />
      </div>
    </div>
  );
}
