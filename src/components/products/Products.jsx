import React from 'react'
import Product from './Product';
import "./product.css"

const Products = ({products}) => {
    console.log("pr",products)
  return (
    <div className='productsDisplay'>
      {products.length!==0 && products.map((e)=>(
        <Product product={e} />
      ))}
    </div>
  )
}

export default Products
