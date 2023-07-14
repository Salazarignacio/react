import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { baseDatos } from "../../firebase/firebaseConfig";
import Loading from "../Loading/Loading";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { userCategory } = useParams();

  useEffect(() => {
    const productsRef = !userCategory
      ? collection(baseDatos, "baseDatos")
      : query(
          collection(baseDatos, "baseDatos"),
          where("category", "==", userCategory)
        );

    setLoading(true);
    getDocs(productsRef)
      .then((querySnapshot) => {
        const productsAdapted = querySnapshot.docs.map((doc) => {
          const fields = doc.data();
          return { id: doc.id, ...fields };
        });

        setProducts(productsAdapted);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userCategory]);

  return (
    <div className="mh">
      {loading && <Loading />}

      <ItemList data={products}></ItemList>
    </div>
  );
}

export default ItemListContainer;
