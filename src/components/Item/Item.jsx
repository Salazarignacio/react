import "./Item.css";
import { Link } from "react-router-dom";

function Item({ id, title, img, description, category }) {
  return (
    <div key={id} className="Item p-5">
      <h3 className="mb-5"> {title} </h3>
      <img src={img} className="mb-4" alt="car" />
      <p>{description}</p>

      <Link to={`/item/${id}`}>
        <button className="btn-modern" type="button">
          Ver Info
        </button>
      </Link>
    </div>
  );
}

export default Item;
