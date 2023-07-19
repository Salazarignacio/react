import { createContext, useState } from "react";
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
  const navigate = useNavigate();

  /* ------------------------------Login---------------------------------- */

  function getUser() {
    const usersRef = collection(baseDatos, "users");
    getDocs(usersRef).then((qs) => {
      const map = qs.docs.map((a) => {
        const fields = a.data();
        return { ...fields };
      });
      setUsers(map);
    });
    console.log(user);
    const searchUser = users.find((a) => a.usuario == user);
    /* searchUser aparece la primera vez como undefined y entra a la segunda */
    if (searchUser && searchUser.password == pass) {
      setLogged(true);
      navigate("/"); /* push del useParams que dio click */
    } else alert("nombre de usuario o contraseña incorrecto");
  }

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
      email: mailUser
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
        }}
      >
        {children}
      </LoginContext.Provider>
    </>
  );
}
