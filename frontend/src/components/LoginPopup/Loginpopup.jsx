import React, { useContext, useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/storeContext'
import axios from 'axios'
const Loginpopup = ({ setshowLogin }) => {
  const { url ,setToken } = useContext(StoreContext);
  const [currentState, setcurrentState] = useState("sign in")
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const onchangeHandler = async (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))

  }

  const onLogin = async (event) => {
event.preventDefault();
let newUrl=url;
if(currentState==='sign in'){
  newUrl +="/api/user/login"
}
else{
  newUrl +="/api/user/register"
}
const response=await axios.post(newUrl, data);
if(response.data.sucess){
setToken(response.data.token)
localStorage.setItem("token",response.data.token);
setshowLogin(false);
}
else{
  alert(response.data.message);
}
  }

  return (



    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currentState}</h2>
          <img onClick={() => setshowLogin(false)} src={assets.cross_icon} alt='' />
        </div>
        <div className='login-popup-inputs'>
          {currentState === "sign in" ? <></> : <input name='name' onChange={onchangeHandler} value={data.name} type='text' placeholder='your name' required />}

          <input name='email' onChange={onchangeHandler} value={data.email} type='email' placeholder='your email' required />
          <input name='password' onChange={onchangeHandler} value={data.password} type='password' placeholder='your password' required />
        </div>
        <button type='submit'>{currentState === "sign in" ? "sign in" : "sign Up"}</button>
        <div className='login-popup-condition'>
          <input type='checkbox' required />
          <p>By containing , i agree to the terms of use & privacy policy </p>
        </div>
        {currentState === "sign in" ? <p>Create a new-account?<span onClick={() => setcurrentState("sign Up")}>click here</span></p> : <p>Already have an account?<span onClick={() => setcurrentState("sign in")}>Login here</span></p>}

      </form>
    </div>



  )
}

export default Loginpopup