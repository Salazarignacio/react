import { useContext } from "react";
import { ThemeContext } from "../../App";

function Cart ({title, id, price, quantity,}){

    const theme = useContext(ThemeContext);
    const data = theme[0]
    console.log(theme[0])
    return (<div>
  
        
        <p>{data.map((a)=>{return(title=a.title)})}</p>
              </div>)
}

export default Cart