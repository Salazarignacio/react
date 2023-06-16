import { useState } from "react";
import { ThemeContext } from "../App";
import { useContext } from "react";


export default function Practicas() {
  const nacho = ThemeContext
  const theme = useContext(ThemeContext);
  return (
    <div>
      <button onClick={()=>console.log(theme)}>Cambiar Elemento</button>
      <button onClick={()=>console.log(nacho)}>Cambiar Elemento 2</button>
       
    </div>
  );
}
