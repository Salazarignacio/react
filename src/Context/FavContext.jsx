import { useState, createContext } from "react";

export const ThemeContextFav = createContext("");

function FavContext({ children }) {

  const [fav, setFav] = useState([]);


  /* ------------------------favoritos ------------------------ */
  const isInFav = (id) => {
    return fav.some((a) => a.id === id);
  };
  function addFav(prod) {
    if (!isInFav(prod.id)) {
      setFav((prev) => {return[...prev, prod]});
      console.log("if");
    };
    
    console.log(fav);
  }

  return (
    <>
      <ThemeContextFav.Provider
        value={{
          addFav,
          isInFav,
          fav,
        }}
      >
        {children}
      </ThemeContextFav.Provider>
    </>
  );
}

export default FavContext;
