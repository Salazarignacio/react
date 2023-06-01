import mock from "../../Mock";
import { useEffect, useState } from "react";
import Item from "../Item/Item";

function ItemList() {
  const [request, setRequest] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mock()
      .then((data) => {
        setRequest(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        request.map((a) => {
          return (
            <Item
              key={a.id}
              title={a.title}
              id={a.id}
              description={a.description}
              img={a.img}
            ></Item>
          );
        })
      )}
    </div>
  );
}

export default ItemList;
