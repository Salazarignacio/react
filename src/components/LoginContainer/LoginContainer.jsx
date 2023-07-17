import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Login";
import Login from "../Login/Login";
import { baseDatos } from "../../firebase/firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

export const LoginContext = createContext("");

export default function LoginContainer({children}) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [users, setUsers] = useState([]);
  const [loged, setLoged] = useState(false);
  const navigate = useNavigate();

  function sendUser() {
    const usersRef = collection(baseDatos, "users");
    getDocs(usersRef).then((qs) => {
      const map = qs.docs.map((a) => {
        const fields = a.data();
        return { ...fields };
      });
      setUsers(map);
    });
    const searchUser = users.find((a) => a.usuario == user);
    console.log(searchUser);
    searchUser ? navigate("/") : alert("usuario inexistente");

    if (searchUser && searchUser.password == pass) {
      setLoged(true)
      navigate("/");
    } else alert("nombre de usuario o contraseña incorrecto");
  }

  return (
    <>
      {/* podria reutilizar el componente Login para optimizar la app */}
         <LoginContext.Provider
        value={{user, loged}}
      >
        {children}
      </LoginContext.Provider>
      <Login
        user={user}
        pass={pass}
        setUser={setUser}
        setPass={setPass}
        fn2={sendUser}
      ></Login>
    </>
  );
}
