import CartWidget from './CartWidget'
import './NavBar.css'

export default function NavBar (){
    return (<div className="NavBar">
         <div>
            <img src="https://seeklogo.com/images/S/shopify-logo-826A5C40EC-seeklogo.com.png" alt="brand"/>
         </div>
         <div>
            <ul>
                <li><a href="#">Clickeable 1</a></li>
                <li><a href="#">Clickeable 2</a></li>
                <li><a href="#">Clickeable 3</a></li>
            </ul>
         </div>
         <div>
            <CartWidget cantidad={7}/>
         </div>
         </div>)
}