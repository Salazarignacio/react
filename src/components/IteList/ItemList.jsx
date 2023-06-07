import { getCategory } from "../../mock";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import useProducts from "../customHooks/customHook";

export default function ItemList() {
  const { userCategory } = useParams();
  const { product, loading } = useProducts(()=>getCategory(userCategory), userCategory);

/*   const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

const { userCategory } = useParams();
  useEffect(() => {
    getCategory(userCategory).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [userCategory]);
 */
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
              img={a.img.img1}
              category={a.category}
            ></Item>

          );
        })
      )}
    </div>
  );
}