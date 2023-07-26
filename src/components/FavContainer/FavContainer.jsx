import { useContext } from "react";
import { ThemeContextFav } from "../../Context/FavContext";

export default function (){
    const themeFav = useContext(ThemeContextFav);
    const {fav} = themeFav;
    return(
        <>
        {fav.length < 1 && <h1 className="mh"> <i className="fa-solid fa-cart-shopping"></i>Favoritos esta vacío </h1>}
       
        </>
    )
}