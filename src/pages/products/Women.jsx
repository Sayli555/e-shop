import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import Filter_Categories from '../../components/Filter_Categories';
import Product from '../../components/products/Product';
import Products from '../../components/products/Products';
import TextTypewriter from '../../components/TextTypewriter';
import { mensDataGet } from '../../redux/mens/action';
import { womensDataGet } from '../../redux/womens/action';
import "./mens.css"


const Women = () => {
    const [searchParams]=useSearchParams()
    const womens=useSelector((state)=>state.womensReducer.womens);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(womensDataGet())

      const brand=searchParams.getAll("brand");
      const sortUrl=searchParams.get("sort");

        if(womens.length!==0 && (!brand || !sortUrl)){
            dispatch(womensDataGet())
        }
    },[])
   

  return (
    <div className='mens'>
      <div className='filter_category'>
        <Filter_Categories category="womens" />
      </div>
      <div className='products'>
      <TextTypewriter first="Welcome To" second="Women's" />
        <Products productCategory="womens" products={womens}/>
      </div>
    </div>
  )
}

export default Women
