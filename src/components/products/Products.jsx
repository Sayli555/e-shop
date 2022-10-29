import React from 'react'
import { Link } from 'react-router-dom';
import Product from './Product';
import "./product.css"

const Products = ({products,productCategory}) => {
   
  return (
    <div className='productsDisplay'>
      {products.length!==0 && products.map((e)=>(
        
        <Product productCategory={productCategory} product={e} />
       
        
      ))}
    </div>
  )
}

export default Products
