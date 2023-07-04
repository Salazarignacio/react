import ItemList from '../ItemList/ItemList';
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { baseDatos } from '../../firebase/firebaseConfig';


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
      {loading &&
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
        </div>}
      
       { product.map((a) => {
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
  }
    </div>
  );
}

export default ItemListContainer;
