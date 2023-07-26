import Item from "../Item/Item";

export default function SearchProducts({
  search,
  setSearch,
  render,
  setRender,
  products
}) {
  const searching = (e) => {
    e.preventDefault();
  const rta = products.filter((a) => a.title.includes(search.toUpperCase()));
  setRender(
    rta.map((a) => {
      return (
        <Item
          key={a.id}
          id={a.id}
          title={a.title}
          img={a.img.img1}
          category={a.category}
        ></Item>
      );
    })
  )};
  return (
    <>
      <form className="Checkout mh" onSubmit={(e) => searching(e)}>
        <h3 className="mb-5">Busque el nombre de su producto</h3>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyUp={(e) => searching(e)}
        />
        <button className="btn-modern mb-5">Buscar</button>
      </form>
      {render}
    </>
  );
}
