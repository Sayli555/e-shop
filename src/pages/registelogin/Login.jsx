import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/action';

const Login = () => {

  const [userName,setUserName]=useState("")
  const [Password,setPassword]=useState("");
  const dispatch=useDispatch();

  const users=useSelector((state)=>state.authReducer.users);
  console.log(users)


  const loginin=()=>{
    const payload=users.find((user)=>user.userName==userName && user.Password==Password);
    if(payload){
      dispatch(login(payload));
      alert("succesfully")
    }
    else {
      alert("wrong credential")
    }
  }


  return (
    <div>
      <input type="text" placeholder='Username' value={userName} onChange={(e)=>setUserName(e.target.value)}  />
      <input type="password" placeholder='Password' value={Password} onChange={(e)=>setPassword(e.target.value)}  />
      <button onClick={loginin}>Login</button>

    </div>
  )
}

export default Login
