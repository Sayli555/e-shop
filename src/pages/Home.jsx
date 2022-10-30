import React from 'react';
import TextTypewriter from '../components/TextTypewriter';
import "./home.css"
import AllProduct from './products/AllProduct';

const Home = () => {
  return (
    <div className='home-div'>
    <div>
      <TextTypewriter first="Welcome To" second="E-Shop" />
    </div>
      <div>
        <img
        src="https://static.vecteezy.com/system/resources/thumbnails/004/299/835/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
        width="100%"
        height="100%"
        />
      </div>
      <div className='home-all-products'>
        <AllProduct/>
      </div>
    </div>
  )
}

export default Home
