function Item({id, nombre}) {
    return ( <div  key = { id } >
        <h3>{id}</h3>
        <p> { nombre } </p> 
        
        </div>
    )
}

export default Item