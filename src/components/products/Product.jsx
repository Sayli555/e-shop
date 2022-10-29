import React from 'react';
import "./product.css";

const Product = ({product}) => {
  return (
    <div className='product'>
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
      <button>Add To Cart</button>
    </div>
  )
}

export default Product
