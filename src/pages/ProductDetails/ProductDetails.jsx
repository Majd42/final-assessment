import React, { useRef, useState } from 'react'
import './styles.css'
import { useProducts } from '../../contexts/ProductsContext'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Rating } from '@mui/material'

const ProductDetails = () => {
  const [quantity,setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(prev => prev !== 0? prev -1: 0)
  }

  const handleDecrease = () => {
    setQuantity (prev => prev +1)
  }

  const {currentProduct} = useProducts();

  return (
    <section className='product-details'>
        
        <div className="product-media">
          <Link className='back-router-link' to='/home'><ArrowBackIcon /> Back</Link>
          <img src={currentProduct.image} alt="product" />
        </div>
        <div className="product-info">
          <h1>{currentProduct.title}</h1>
          <h2>${currentProduct.price}</h2>
          <Rating name="read-only" value={currentProduct.rating.rate} readOnly />
          <h5>{currentProduct.rating.count} Rating Count</h5>
          <p>{currentProduct.description}</p>


          <label>Quantity</label>
          <div className="quantity-container">

            <button onClick={handleIncrease}>-</button>
            <span>{quantity}</span>
            <button onClick={handleDecrease}>+</button>
          </div>
          <button className='addtocart-btn'>Add to Cart</button>
          
        </div>
    </section>
  )
}

export default ProductDetails