import {
  
  writeBatch,
  getDocs,
  addDoc,
  query,
  where,
  collection,
  documentId,
  
} from "firebase/firestore";
import { useState, useContext } from "react";
import { ThemeContext } from "../../CartContext/CartContext";
import Checkout from "../Checkout/Checkout";
import { baseDatos } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const CheckoutContainer = () => {
  const [orderId, setOrderId] = useState(false);
  const theme = useContext(ThemeContext);
  const [cart] = theme;

  const navigate = useNavigate()
  const sendOrder = async () => {

    const order = {
      buyer: { name: "Ayra", phone: "123", email: "ayralagata@gmail.com" }, // esto de saca del input
      items: cart,
      total: "un monton de plata",
    };
    /* hacer loading */
try{
      const ids = cart.map((a=> a.id))

      const productsRef = query(collection(baseDatos, "baseDatos"), where(documentId(), 'in', ids))

      const {docs} = await getDocs(productsRef)
      const batch = writeBatch(baseDatos)

      const outOfStock = []

      docs.forEach(a=>{
         const fieldsDoc = a.data()
         const stockDb = fieldsDoc.stock
        
        const productAddedCart = cart.find(b=> b.id === a.id)
        const prodQuanity = productAddedCart?.quantity

        if (stockDb >= prodQuanity){
          batch.update(a.ref, {stock: stockDb - prodQuanity})
        } else {
outOfStock.push({id: a.id, ...fieldsDoc})
        }
        })

    if (outOfStock.length === 0){
      batch.commit()

      const orderRef = collection(baseDatos, 'ordersCart')

      const {id} = await addDoc(orderRef, order)
      setOrderId(id)
      cart.splice(0, cart.length)
      /* navigate('/') */
    } else alert ("no hay stock suficiente")
  
  } catch(error){
      console.error(error)
    }
  };

  return (
    <>
      {orderId ? (<div>
        <h3>Su orden de pédido es {orderId}</h3>
        <button className='btn btn-success' onClick={(()=>navigate('/'))}>Volver al menú principal</button>
        </div>
      ) : (
        <Checkout funcion={sendOrder}></Checkout>
      )
      }
    </>
  );
};

export default CheckoutContainer;
