import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Filter_Categories from '../../components/Filter_Categories';
import Product from '../../components/products/Product';
import Products from '../../components/products/Products';
import { mensDataGet } from '../../redux/mens/action';
import "./mens.css"

const Mens = () => {
    const mens=useSelector((state)=>state.mensReducer.mens);
    const dispatch=useDispatch()
    useEffect(()=>{
        if(mens.length==0){
            dispatch(mensDataGet())
        }
      
      
    },[])
    console.log(mens)

  return (
    <div className='mens'>
      <div className='filter_category'>
        <Filter_Categories/>
      </div>
      <div className='products'>
        <Products products={mens}/>
      </div>
    </div>
  )
}

export default Mens
