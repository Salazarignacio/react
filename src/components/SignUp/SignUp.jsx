import "../Login/Login";

/* hacer customHook para formularios */
export default function SignUp({user, pass, setUser, setPass, fn, fn2}) {
 
  function handleSubmit(e){
    e.preventDefault();
    fn()
  }
  return (
    <div className="mh p-5 login">
      <h3 className="mb-5">Cree su nombre de usuario y contraseña</h3>
      <form onSubmit={fn2} className="Checkout " >
        <label className="mb-2">Usuario</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <label className="mb-2">Contraseña</label>
        <input
          type="password"
          className="mb-4"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={()=>handleSubmit(e)} className="btn-modern ">Registrarse</button>
      </form>
    </div>
  );
}
