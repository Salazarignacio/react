export default function Upload(
 { title,
  setTitle,
  description,
  setDescription,
  img1,
  img2,
  img3,
  setImg1,
  setImg2,
  setImg3,
  category,
  setCategory,
  price,
  setPrice,
  stock,
  setStock,
  fn1}
) {
    function dale(e){
        e.preventDefault()
        fn1()
    }
  return (
    <div className="mh  p-5 login ">
      <h3 className="mb-5">Ingrese los datos del producto a agregar</h3>
      <form className="Checkout " onSubmit={(e)=>{dale(e)}}>
        <label>Título</label>
        <input value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text"/>
        <label>Categoria</label>
        <input value={category} onChange={(e)=>{setCategory(e.target.value)}} type="text"/>
       
        <label>Imagen 1</label>
        <input value={img1} onChange={(e)=>{setImg1(e.target.value)}} />
        <label>Imagen 2</label>
        <input value={img2} onChange={(e)=>{setImg2(e.target.value)}} />
        <label>Imagen 3</label>
        <input value={img3} onChange={(e)=>{setImg3(e.target.value)}} />
       
        <label>Descripción</label>
        <input value={description} onChange={(e)=>{setDescription(e.target.value)}} type="text"/>
        <label>Precio</label>
        <input value={price} onChange={(e)=>{setPrice(e.target.value)}} type="number"/>
        <label>Stock</label>
        <input value={stock} onChange={(e)=>{setStock(e.target.value)}} type="number"/>
        <button className="btn-modern">Crear Producto</button>
      </form>
      </div>
  );
}
