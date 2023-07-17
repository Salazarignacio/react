import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../LoginContainer/LoginContainer";
import { useContext } from "react";

export default function NavBar() {
  const themeLogin = useContext(LoginContext)
  const {user} = themeLogin
  const {loged} = themeLogin
  return (
    <header className=" container-fluid bColor">
      <div className="NavBar container-sm ">
        <div>{loged?<p>Usario: {user}</p>:<button className="btn-modern">Iniciar Sesión</button>}</div>
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

            </button>
          </NavLink>
          <NavLink to={"category/notebook"}>
            <button type="button" className="btn btn-outline-light">
              <i className="icon fa-solid fa-laptop-code"></i>
              
            </button>
          </NavLink>
          <NavLink to={"category/watch"}>
            <button type="button" className="btn btn-outline-light">
              <i className="icon fa-regular fa-clock"></i>

              
            </button>
          </NavLink>
        </div>
        <div>
          <NavLink to={"cart"}>
            <CartWidget />
          </NavLink>
        </div>
      </div>
    </header>
  );
}
