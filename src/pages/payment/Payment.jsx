import React from 'react';
import "./payment.css"
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';

function Payment() {
    const navigate=useNavigate();
    const TotalPrice=useSelector((state)=>state.cartReducer.TotalPrice);

    const creataccbtn=()=>{
        toast.success(`Rs ${TotalPrice+500} /- Payment Succesfull`, {
            position: toast.POSITION.TOP_CENTER
        });

        setTimeout(() => {
            navigate("/")
        }, 3000);
      
      }
  return (
    <>
    <div className='paymentmain'>
      <div className='payment'>
        <h2>Card Details</h2>
        <div className="Linput">
        <lable>Name on Card</lable>
                <br/>
        <input 
        type="text" 
        name="card"
        placeholder="name on card" 
        // value={email}
        // onChange={handlechange}       
        />
        </div>
        <div className="Linput">
        <lable>Card Number</lable>
                <br/>
        <input 
        type="number" 
        name="card number"
        placeholder="Card Number" 
        // value={age}
        // onChange={handlechange}       
        />
        </div>
        <button onClick={creataccbtn} className="creataccbtn">Payment</button>
      </div>
      <div className='paymentdetail'>
        <img style={{height:"90%" ,width:"90%" }}
        src="https://thumbs.dreamstime.com/b/e-commerce-orange-square-button-isolated-reflected-abstract-illustration-104715752.jpg" />
      </div>


    </div>
    <ToastContainer />
    </>
  )
}

export default Payment