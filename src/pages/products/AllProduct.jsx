import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import Filter_Categories from '../../components/Filter_Categories';
import Product from '../../components/products/Product';
import Products from '../../components/products/Products';
import TextTypewriter from '../../components/TextTypewriter';
import { allDataGet } from '../../redux/allProducts/action';
import { mensDataGet } from '../../redux/mens/action';
import "./mens.css"


const AllProduct = () => {
    const [searchParams]=useSearchParams()
    const AllProduct=useSelector((state)=>state.allReducer.allProducts);
    const dispatch=useDispatch();

    useEffect(()=>{

      const brand=searchParams.getAll("brand");
      const sortUrl=searchParams.get("sort");

       // if(mens.length!==0 && (!brand || !sortUrl)){
            dispatch(allDataGet())
     //   }
    },[])
    // console.log(mens)

  return (
    <div className='mens'>
      <div className='filter_category'>
        <Filter_Categories category="all" />
      </div>
      <div className='products'>
      <TextTypewriter first="Welcome To" second="All Products" />
        <Products productCategory="all" products={AllProduct}/>
      </div>
    </div>
  )
}

export default AllProduct
