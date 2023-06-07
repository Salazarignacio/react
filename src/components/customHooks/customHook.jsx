import { useState, useEffect } from "react";

export const useProducts = (asyncFn, array=[]) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    asyncFn()
      .then((data) => {
        setProduct(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [array]);

  return { product, loading };
};

export default useProducts;
