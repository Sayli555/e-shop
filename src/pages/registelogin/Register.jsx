import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4, v4 } from 'uuid';
import { register } from '../../redux/auth/action';

const Register = () => {
  const [name,setName]=useState("")
  const [userName,setUserName]=useState("")
  const [Password,setPassword]=useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate()


  const registerButton=()=>{
    const payload={
      id:v4(),
      name,userName,Password
    }
    dispatch(register(payload));
    navigate("/login")
  }


  return (
    <div>
      <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
      <input type="text" placeholder='Username' value={userName} onChange={(e)=>setUserName(e.target.value)}  />
      <input type="password" placeholder='Password' value={Password} onChange={(e)=>setPassword(e.target.value)}  />
      <input type="password" placeholder='Confirm Password' />
      <button onClick={registerButton}>Register</button>
    </div>
  )
}

export default Register
