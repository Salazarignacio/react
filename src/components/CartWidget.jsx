import './CartWidget.css'

function CartWidget ({cantidad}){
    return (
        <div className="cart">
            <button type="button" className='btn btn-outline-warning'>
                <i className="fa-solid fa-cart-shopping icon"></i>
            <span>{cantidad}</span>
            </button> 
        </div>
    )
}

export default CartWidget