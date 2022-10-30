import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddToCart } from '../../redux/cart/action';

import "./product.css";

const Product = ({product,productCategory}) => {
  // console.log(product.id,productCategory)
const dispatch=useDispatch()


  const addToCart=()=>{
   const payload={...product}
    dispatch(AddToCart(payload))
  }

  

  return (
    <div className='product'>
     <Link to={`/${productCategory}/${product.id}`} state={{ from: productCategory }} >
      <div className='product_img'>
        <img
        src={product.imageurl}
        width="100%"
        height="100%"
        />
      </div>
      <div className='product_price_title'>
        <div>
          {`${product.price}Rs`}
        </div>
        <div className='product_title'>
        {product.Name}
        </div>
      </div>
      </Link>
      <button onClick={addToCart} >Add To Cart</button>
    </div>
  )
}

export default Product
