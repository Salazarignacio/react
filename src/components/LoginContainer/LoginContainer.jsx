import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Login";
import { baseDatos } from "../../firebase/firebaseConfig";
import { getDocs, collection, addDoc } from "firebase/firestore";

export const LoginContext = createContext("");

export default function LoginContainer({ children }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [phoneUser, setPhoneUser] = useState("");
  const [mailUser, setMailUser] = useState("");
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState({});
  const [logged, setLogged] = useState(false);
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();

  /* ------------------------------Login---------------------------------- */

  const getUser = async () => {
    const usersRef = collection(baseDatos, "users");

    const qs = await getDocs(usersRef);
    const qs1 = await qs;
    const map = await qs1.docs.map((a) => {
      const fields = a.data();
      return { ...fields };
    });

    const awaitMap = await map;
    setUsers(map);

    const searchUser = awaitMap.find((a) => a.usuario == user);

    if (awaitMap && searchUser.password == pass) {
      if(user=="admin"){
        setAdmin(true)
      } else {setAdmin(false)}
      setLogged(true);
      console.log(searchUser.email);
      navigate("/");
    } else alert("nombre de usuario o contraseña incorrecto");
  };

  /* ------------------------------SignUp---------------------------------- */
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
       telefono: phoneUser,
      email: mailUser, 
    };
    const userRef = collection(baseDatos, "users");

    addDoc(userRef, info).then(({ id }) =>
      setUserId(id)
    ); /* devuelve el id de la orden  */

    navigate("/");
  };

  return (
    <>
      <LoginContext.Provider
        value={{
          user,
          pass,
          phoneUser,
          mailUser,
          setUser,
          setPass,
          setPhoneUser,
          setMailUser,
          getUser,
          logged,
          setLogged,
          sendUser,
          newUser,
          admin,
          setAdmin
        }}
      >
        {children}
      </LoginContext.Provider>
    </>
  );
}
