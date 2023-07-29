import { useState, createContext } from "react";

export const ThemeContextFav = createContext("");

function FavContext({ children }) {
  const [fav, setFav] = useState([]);
  const [stateFav, setStateFav] = useState(true);

  /* ------------------------favoritos ------------------------ */

  const arrayToJSON = (clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor));
  };

  const isInFav = (id) => {
    return fav.some((a) => a.id === id);
  };
  function addFav(prod) {
    if (!isInFav(prod.id)) {
      setFav((prev) => {
        return [...prev, prod];
      });

      setStateFav(!stateFav);
    } else {
      del(prod.id);
    }

    fav.map((a) => {
      return (
        
          
          arrayToJSON("id", a.id)
      
/* lo puedo dejar aca y ver como lo consumo */
      )
    });
  }

  const del = (id) => {
    let busqueda = fav.map((el) => el.id).indexOf(id);
    fav.splice(busqueda, 1);
    setStateFav(!stateFav);
  };

  return (
    <>
      <ThemeContextFav.Provider
        value={{
          addFav,
          isInFav,
          fav,
          del,
        }}
      >
        {children}
      </ThemeContextFav.Provider>
    </>
  );
}

export default FavContext;
