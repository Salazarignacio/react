import { getDetail } from "../Mock";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import useProducts from "./customHooks/customHook";

export default function ItemDetailContainer() {
  const { userId } = useParams();
  const { product, loading } = useProducts(() => getDetail(userId), userId);

  return (
    <>
      {loading ? (
        <div className="mh">
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
        <div className="mh">
          <ItemDetail
            title={product.title}
            img1={product.img.img1}
            img2={product.img.img2}
            img3={product.img.img3}
            description={product.description}
            id={product.id}
            price={product.price}
            stock={product.stock}
          ></ItemDetail>
        </div>
      )}
    </>
  );
}
