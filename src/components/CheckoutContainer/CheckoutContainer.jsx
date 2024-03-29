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
import { ThemeContext } from "../../Context/CartContext";
import Checkout from "../Checkout/Checkout";
import { baseDatos } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../LoginContainer/LoginContainer";
import CheckouLogged from "../CheckoutLogged/CheckouLogged";
import Loading from '../Loading/Loading'

const CheckoutContainer = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [mail, setMail] = useState("");
  const [mail2, setMail2] = useState("");
  const [orderId, setOrderId] = useState(false);
  

  const themeLogin = useContext(LoginContext);
  const { user, logged, phoneUser, mailUser } = themeLogin;

  function createUser() {
    const objUser = {
      name,
      phone,
      mail,
    };

    return objUser;
  }

  const theme = useContext(ThemeContext);
  const [cart] = theme;
  const [, , , , total] = theme;
  const [, , , , , , clearCart] = theme;

  const navigate = useNavigate();
  const sendOrder = async () => {

    const order = {
      buyer: {
        name: name,
        phone: phone,
        email: mail,
      },
      items: cart,
      total: total,
      estado: "orden generada",
      fecha: new Date(),
    };
    if (logged){
      order.buyer.name=user
      order.buyer.phone=phoneUser
      order.buyer.email=mailUser
    }
    
    
    try {
      
      
      
      const ids = cart.map((a) => a.id);

      const productsRef = query(
        collection(baseDatos, "baseDatos"),
        where(documentId(), "in", ids)
      );

      const { docs } = await getDocs(productsRef);
      const batch = writeBatch(baseDatos);

      const outOfStock = [];

      docs.forEach((a) => {
        const fieldsDoc = a.data();
        const stockDb = fieldsDoc.stock;

        const productAddedCart = cart.find((b) => b.id === a.id);
        const prodQuanity = productAddedCart?.quantity;

        if (stockDb >= prodQuanity) {
          batch.update(a.ref, { stock: stockDb - prodQuanity });
        } else {
          outOfStock.push({ id: a.id, ...fieldsDoc });
        }
      });

      if (outOfStock.length === 0) {
        batch.commit();

        const orderRef = collection(baseDatos, "orders");

        const { id } = await addDoc(orderRef, order);
        clearCart();
        setOrderId(id);
      } else alert("no hay stock suficiente");
    } catch (error) {
      console.error(error);
    } 
  };

  return (
    <>
    
      {orderId ? (
        <div className="mh">
          <h3>Su orden de pédido es {orderId}</h3>
          <button
            className="btn-modern"
            onClick={() => {
              navigate("/");
            }}
          >
            Volver al menú principal
          </button>
        </div>
      ) : ( logged?<CheckouLogged fn={sendOrder} fn2={createUser}/>:
        <Checkout
          fn={sendOrder}
          fn2={createUser} 
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          mail={mail}
          mail2={mail2}
          setMail={setMail}
          setMail2={setMail2}
        ></Checkout>
      )}
    </>
  );
};

export default CheckoutContainer;
