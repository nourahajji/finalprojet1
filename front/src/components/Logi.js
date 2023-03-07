import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { userlogi } from '../JS/userSlice/userSlice';

function Logi() {
  const navigate=useNavigate();
  const [logi, setlogi] = useState({
    email:"",
    password:"",
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
    <form  onSubmit ={(e)=>e.preventDefault()}className="form-signin">       
      <h2 className="form-signin-heading">CONNEXION</h2>
      <input id="bax" type="text" 
      class="form-control" 
      name="username" placeholder="Email Address" required="" autofocus="" 
      onChange={ (e) => setlogi({...logi,email:e.target.value})}/>
      <input  id="bax" type="password" 
      class="form-control" 
      name="Password" placeholder="Password" required="" autofocus="" 
      onChange={ (e) => setlogi({...logi,password:e.target.value})} />
        
      <label class="checkbox">
        <input  type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
      </label>
      <button id="block" className="btn btn-lg btn-primary btn-block" onClick={() => {
                    setTimeout(() => {dispatch(userlogi(logi));navigate("/")
                    }, 1000);}} 
      >Connexion</button>  
      <button id="res"> <Link id="butt" to="/Register">S'inscrire</Link></button>  
    </form>
  </div>
    </div>
  )
}

export default Logi