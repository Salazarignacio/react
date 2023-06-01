import mockDetail from "../Mock";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail.jsx/ItemDetail";

export default function ItemDetailContainer() {
  const [req, setReq] = useState({});/* <--Probe cambiar el valor incial */

  useEffect(() => {
    mockDetail(2).then((data) => {
        setReq(data);
        console.log(data); /* Aca me devuelve el array completo! */
    });
  }, []);

  return (
    <>
      <ItemDetail
        description={req.description}
        id={req.id}
        title={req.title}
      ></ItemDetail>
    </>
  );
}
