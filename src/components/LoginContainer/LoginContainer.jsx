import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Login";
import Login from "../Login/Login";
import { baseDatos } from "../../firebase/firebaseConfig";
import { getDocs, collection } from "firebase/firestore"


export default function LoginContainer() {
 
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  
   function dale (){
    
      const usersRef = collection(baseDatos, "users")
      getDocs(usersRef)
          .then((qs)=>{
            const map = qs.docs.map((a)=>{
              const fields = a.data();
              return {...fields}
            });
            setUsers(map)
          })
         const booleano = users.find((a)=>a.usuario==user)
         console.log(booleano)
         booleano?navigate("/"):alert("usuario inexistente");
        
  } 
  



  return (
    <>
      <Login
        user={user}
        pass={pass}
        setUser={setUser}
        setPass={setPass}
         
         fn2={dale} 
        
      ></Login>
    </>
  );
}
