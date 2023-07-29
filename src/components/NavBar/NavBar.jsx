import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import { LoginContext } from "../LoginContainer/LoginContainer";
import { useContext } from "react";
import { ThemeContextFav } from "../../Context/FavContext";

export default function NavBar() {
  const themeLogin = useContext(LoginContext);
  const themeContextFav = useContext(ThemeContextFav);
  const { user, logged, setLogged, admin, setAdmin } = themeLogin;
  const {fav } = themeContextFav

  return (
    <div className="loginHeader">
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
            <NavLink to={"favs"}>
              <button type="button" className="btn btn-outline-light">
              {fav.length>0?
                <i className="icon fa-solid fa-heart"></i>:
                <i className="icon fa-regular fa-heart"></i>}
              </button>
            </NavLink>
            <NavLink to={"search"}>
              <button type="button" className="btn btn-outline-light">
                <i className="icon fa-solid fa-magnifying-glass"></i>
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

      {logged ? (
        <div className="m-3">
          <i className="fa-solid fa-user"></i> {user}{" "}
          <button
            onClick={() => {
              setLogged(false);
              setAdmin(false);
            }}
            className="btn-delete delete2"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      ) : (
        <Link to={"/login"}>
          <button className="btn-modern m-3">Iniciar Sesión</button>
        </Link>
      )}
      <div className="m-3">
        {admin && (
          <NavLink to={"upload"}>
            <button type="button" className="btn btn-outline-dark">
              <i className="icon fa-solid fa-plus"></i>
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
}
