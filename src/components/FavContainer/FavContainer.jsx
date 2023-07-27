import { useContext } from "react";
import { ThemeContextFav } from "../../Context/FavContext";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function (){
    const themeFav = useContext(ThemeContextFav);
    const {fav, del} = themeFav;
    return(
        <>
        {fav.length < 1 && <h1 className="mh"> <i className="fa-solid fa-cart-shopping"></i>Favoritos esta vacío </h1>}
       <div className="mh">
        {fav.map((a)=>{
            return(<>
                
                <li className="mb-4" key={a.id}>
                    
                <ItemDetail
                
                key={a.id}
                title={a.title}
                img1={
                  a.img1
                    ? a.img1
                    : "https://c.tenor.com/Tu0MCmJ4TJUAAAAC/load-loading.gif"
                }
                /* img2={a.img && a.img.img2}
                img3={a.img && a.img.img3} */
                description={a.description}
                id={a.id}
                price={a.price}
                stock={a.stock}
              />
              </li>
              
            </>)
        })}
       </div>
        </>
    )
}