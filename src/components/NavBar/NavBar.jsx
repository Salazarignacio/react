import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

export default function NavBar() {
  return (
    <header className="NavBar container-fluid">
      <div>
        <button type="button" className="btn btn-outline-warning">
          <i className="fa-regular fa-futbol icon"></i>
        </button>
      </div>
      <div className="categories">
        <button type="button" className="btn btn-outline-warning">
          SmartTV
        </button>
        <button type="button" className="btn btn-outline-warning">
          Notebooks 2
        </button>
        <button type="button" className="btn btn-outline-warning">
          SmartWatch
        </button>
      </div>
      <div>
        <CartWidget cantidad={7} />
      </div>
    </header>
  );
}
