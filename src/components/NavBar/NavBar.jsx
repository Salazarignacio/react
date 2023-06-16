import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function NavBar() {
  const theme = useContext(ThemeContext);
  const data = theme[0];
  return (
    <header className=" container-fluid bColor">
      <div className="NavBar container-sm ">
        <div>
          <NavLink to={"/"}>
            <button type="button" className="btn btn-outline-light">
              <i className="icon fa-solid fa-store"></i>
            </button>
          </NavLink>
        </div>
        <div className="categories">
          <NavLink to={"category/tv"} activeclassname="active">
            <button type="button" className="btn btn-outline-light">
              <i className="icon fa-solid fa-tv"></i>
              {/* <p>Tv</p> */}
            </button>
          </NavLink>
          <NavLink to={"category/notebook"}>
            <button type="button" className="btn btn-outline-light">
              <i className="icon fa-solid fa-laptop-code"></i>
              {/* <p>NoteBook</p> */}
            </button>
          </NavLink>
          <NavLink to={"category/watch"}>
            <button type="button" className="btn btn-outline-light">
              <i className="icon fa-regular fa-clock"></i>

              {/* <p>SmartWatch</p> */}
            </button>
          </NavLink>
        </div>
        <div>
          <NavLink to={"cart"}>
            <CartWidget cantidad={data.length} />
          </NavLink>
        </div>
      </div>
    </header>
  );
}
