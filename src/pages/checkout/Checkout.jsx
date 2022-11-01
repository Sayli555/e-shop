import "./checkout.css";
import {React ,useRef,useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";

const Checkout = () => {
    const navigate=useNavigate()
    const [formdata,setform]=useState({});

    const [data,setdata]=useState([]);

    const ref=useRef();
    
    const passref=useRef()
  
    const creataccbtn=()=>{
       
                navigate("/payment")
            
      
    }
    const handlechange=()=>{

    }
  return (
    <>
   
    <div className='registermain'>
        <h2>PERSONAL INFORMATION</h2>
      <form>
      
      
        <div className="Linput">
        <lable>First Name</lable>
                <br/>
        <input 
        type="text" 
        name="email"
        placeholder="first name.." 
        // value={email}
        onChange={handlechange}       
        />
        </div>
        <div className="Linput">
        <lable>Last Name</lable>
                <br/>
        <input 
        type="text" 
        name="email"
        placeholder="last name..." 
        // value={email}
        onChange={handlechange}       
        />
        </div>
        <div className="Linput">
        <lable>Email Address</lable>
                <br/>
        <input 
        type="email" 
        name="email"
        placeholder="email" 
        // value={email}
        onChange={handlechange}       
        />
        </div>
        <div className="Linput">
        <lable>Contact NUmber</lable>
                <br/>
        <input 
        type="number" 
        name="age"
        placeholder="contact number" 
        // value={age}
        onChange={handlechange}       
        />
        </div>
        <div className="Linput">
        <lable>City</lable>
                <br/>
        <input 
        type="text" 
        name="email"
        placeholder="city" 
        // value={email}
        onChange={handlechange}       
        />
        </div>
        <div className="Linput">
        <lable>State</lable>
                <br/>
        <input 
        type="text" 
        name="email"
        placeholder="state" 
        // value={email}
        onChange={handlechange}       
        />
        </div>
        <div className="Linput">
        <lable>Country</lable>
                <br/>
        <input 
        type="text" 
        name="email"
        placeholder="country" 
        // value={email}
        onChange={handlechange}       
        />
        </div>
    
    
        
        <button onClick={creataccbtn} className="creataccbtn">Proceed to payment</button>
      </form>

    </div>
    
    </>
  )
}

export default Checkout
