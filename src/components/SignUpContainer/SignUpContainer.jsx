import {
  writeBatch,
  getDocs,
  addDoc,
  query,
  where,
  collection,
  documentId,
} from "firebase/firestore";
import { useState } from "react";
import { baseDatos } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import SignUp from '../Login/SignUp.jsx'

 const SignUpContainer = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [userId, setUserId] = useState({});

  const navigate = useNavigate()

  function newUser() {
    const objUser = {
      user,
      pass,
    };
    return objUser;
  }

  const sendUser = async () => {
    const info = {
      usuario: user,
      password: pass,
    };
const userRef = collection(baseDatos, "users");

   addDoc(userRef, info).then(({id})=>setUserId(id)) /* devuelve el id de la orden  */

   navigate("/")

  };
  return (<>
  <SignUp
  user={user}
  pass={pass}
  setUser={setUser}
  setPass={setPass}
  funcion={sendUser}
  funcion2={newUser}
  />
  </>)
};

export default SignUpContainer
