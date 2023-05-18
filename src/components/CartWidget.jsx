import './CartWidget.css'

function CartWidget ({cantidad}){
    return (
        <div className="cart">
            <a href="#"><img src="https://pixlok.com/wp-content/uploads/2021/10/shopping-cart-osnmdfg.png" alt="cartLogo"/></a> 
            <span>{cantidad}</span>
        </div>
    )
}

export default CartWidget