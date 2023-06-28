import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { baseDatos } from "../firebase/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

export default function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  const { userId } = useParams();

  useEffect(() => {
    const productRef = doc(baseDatos, "baseDatos", userId);
    setLoading(true);
    getDoc(productRef)
      .then((snapChat) => {
        const field = snapChat.data();
        const productAdapted = { id: snapChat.id, ...field };
        setProduct(productAdapted);
      })
      .finally(setLoading(false));
  }, [userId]);
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
            img1={product.img ? product.img.img1: "https://c.tenor.com/Tu0MCmJ4TJUAAAAC/load-loading.gif"}
            img2={product.img && product.img.img2}
            img3={product.img && product.img.img3}
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
