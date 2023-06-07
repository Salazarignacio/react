import useProducts from "../customHooks/customHook";
import Item from "../Item/Item";
import getProducts from "../../mock";

function ItemListContainer() {
  const { product, loading } = useProducts(() => getProducts());

  return (
    <div className="mh">
      {loading ? (
        <div>
          <div className="d-flex justify-content-center mb-2">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          <div
            className="d-flex justify-content-center"
            style={{ fontWeight: 600 }}
          >
            Loading
          </div>
        </div>
      ) : (
        product.map((a) => {
          return (
            <Item
              key={a.id}
              title={a.title}
              id={a.id}
              description={a.description}
              category={a.category}
              img={a.img.img1}
            ></Item>
          );
        })
      )}
    </div>
  );
}

export default ItemListContainer;
