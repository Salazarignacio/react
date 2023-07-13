import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'

export default function Login (){
    const [error, setError] = useState(false)
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
const navigate = useNavigate()
    const handleSubmit =(e)=>{
e.preventDefault()
if(user.length>1 && pass.length>1 ){setError(false); navigate("/")}else {setError(true)}

    }
    return(
        <div className="mh  p-5 login ">
            <form className="Checkout " onSubmit={handleSubmit}>
                <label className="mb-2">Usuario</label>
                <input type="text" value={user} onChange={e=>setUser(e.target.value)}/>
                <label className="mb-2">Contraseña</label>
                <input type="password" className="mb-4" value={pass} onChange={e=>setPass(e.target.value)}/>
                <button className="btn-modern ">Iniciar Sesion</button>
            </form>
            {error && <p>Campos incompletos</p>}
        </div>
    )
}