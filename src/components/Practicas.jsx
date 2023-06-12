import { useState } from "react";

const Button1 = ({funcion}) => {
  return <button onClick={funcion}>Boton1</button>;
};

const Button2 = () => {
  return <><label>Input</label><input/></>
};

export default function ItemDetalle() {
  const [change, setChange] = useState("A");

  function cambio(){
    let nacho
    change=="A"? nacho="B":nacho="A"
    setChange(nacho);
  }

   const Count = change == "B" ? Button2 : Button1; 

   const ff=()=>{console.log("Componente Agnostico")}
  return (
    <div>
      
      <button onClick={cambio}>Cambiar Elemento</button>
       <Count funcion={ff}/> 
    </div>
  );
}
