

function Checkout ({funcion}){
    return (<>
    <form >
        <label >Nombre</label>
        <input type="name" id="name"/>
        <label >Telefóno</label>
        <input type="number" id="phone"/>
        <label >E-mail</label>
        <input type="mail" id="mail"/>
    </form>
        <button className="btn btn-success"  onClick={funcion} >Generar orden de compra</button>
    </>)
}

export default Checkout