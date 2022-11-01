import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { v4 as uuidv4, v4 } from 'uuid';
import TextTypewriter from '../../components/TextTypewriter';
import { register } from '../../redux/auth/action';
import "./register.css"

const Register = () => {
  const [name,setName]=useState("")
  const [userName,setUserName]=useState("")
  const [Password,setPassword]=useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate()


  const registerButton=()=>{
    toast.success('Register Succesfull', {
      position: toast.POSITION.TOP_CENTER
  });
    const payload={
      id:v4(),
      name,userName,Password
    }
    dispatch(register(payload));
    setTimeout(()=>{
      navigate("/login");
    },2000)
    
   
  }


  return (
    <>
    <div className='register'>
    <TextTypewriter first="Welcome To" second="Register" />
      <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
      <input type="text" placeholder='Username' value={userName} onChange={(e)=>setUserName(e.target.value)}  />
      <input type="password" placeholder='Password' value={Password} onChange={(e)=>setPassword(e.target.value)}  />
      <input type="password" placeholder='Confirm Password' />
      <button onClick={registerButton}>Register</button>
    </div>
    <ToastContainer />
    </>
  )
}

export default Register
