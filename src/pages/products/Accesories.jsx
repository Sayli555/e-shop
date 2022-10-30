import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Filter_Categories from '../../components/Filter_Categories';
import Products from '../../components/products/Products';
import TextTypewriter from '../../components/TextTypewriter';
import { accessoriesDataGet } from '../../redux/accessories/action';

const Accesories = () => {
    const [searchParams]=useSearchParams()
    const accessories=useSelector((state)=>state.accessoriesReducer.accessories);
    const dispatch=useDispatch();

    useEffect(()=>{

      const brand=searchParams.getAll("brand");
      const sortUrl=searchParams.get("sort");

       if(accessories.length!==0 && (!brand || !sortUrl)){
            dispatch(accessoriesDataGet())
       }
    },[])
    // console.log(mens)

  return (
    <div className='mens'>
      <div className='filter_category'>
        <Filter_Categories category="accessories" />
      </div>
      <div className='products'>
      <TextTypewriter first="Welcome To" second="Accessories" />
        <Products productCategory="accessories" products={accessories}/>
      </div>
    </div>
  )
}

export default Accesories
