import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Filter_Categories from '../../components/Filter_Categories';
import Product from '../../components/products/Product';
import Products from '../../components/products/Products';
import TextTypewriter from '../../components/TextTypewriter';
import { mensDataGet } from '../../redux/mens/action';
import "./mens.css";
import 'react-toastify/dist/ReactToastify.css';

const Mens = () => {
    const [searchParams]=useSearchParams()
    const mens=useSelector((state)=>state.mensReducer.mens);
    const dispatch=useDispatch();

    useEffect(()=>{

      const brand=searchParams.getAll("brand");
      const sortUrl=searchParams.get("sort");

       // if(mens.length!==0 && (!brand || !sortUrl)){
            dispatch(mensDataGet())
     //   }
    },[])
    // console.log(mens)

  return (
    <>
    <div className='mens'>
      <div className='filter_category'>
        <Filter_Categories category="mens" />
      </div>
      <div className='products'>
      <TextTypewriter first="Welcome To" second="Men's" />
        <Products productCategory="mens" products={mens}/>
      </div>
    </div>
    <ToastContainer />
    </>
  )
}

export default Mens
