import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { userRegister } from '../JS/userSlice/userSlice';
import {Link} from "react-router-dom"
function Register() {
  const [register, setregister] = useState({
    name:"",
    LastName:"",
    email:"",
    password:"",
    img:"https://media.istockphoto.com/id/1331329483/sv/vektor/female-avatar-icon.jpg?s=170667a&w=0&k=20&c=770vIZIy83dRIxrZ2e5GuZZ7f52S_KiItQizNjLug5U=",
  });
 const dispatch = useDispatch();
  return (
     <div className="class">
       <svg id="jour" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
<svg id="current" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
          <div className="wrapper">
    <form onSubmit ={(e)=> e.preventDefault()} className="signin-f">       
      <h2 className="form-signin-heading">S'INSCRIRE </h2>
      <input id="bax" type="text"
       class="form-control" name="name"
        placeholder="name" required=""
         autofocus="" 
         onChange={(e) => setregister({...register,name:e.target.value})}/>
      <input id="bax" type="text" 
      class="form-control" 
      name="LastName"
       placeholder="LastName" 
       required="" autofocus=""
       onChange={ (e) => setregister({...register,LastName:e.target.value})} />
         <input id="bax" type="text" 
      class="form-control" 
      name="username" placeholder="Email Address" required="" autofocus="" 
      onChange={ (e) => setregister({...register,email:e.target.value})}/>
      <input  id="bax" type="password" 
      class="form-control" 
      name="Password" placeholder="Password" required="" autofocus="" 
      onChange={ (e) => setregister({...register,password:e.target.value})} />
   
      <button id="ck" 
      className="btn btn-lg btn-primary btn-block" onClick={() => {dispatch(userRegister(register));
      }}
       ><Link id="butt" to="/profil">S'inscrire</Link></button>  
     
    <button id="res"> <Link id="butt" to="/logi">Connexion </Link></button>
    </form>
  </div>
    </div>
  )
}

export default Register