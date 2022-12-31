import { Rating } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import { useProducts } from '../../../contexts/ProductsContext'

const Product = ({image,category,title,price,rating }) => {


    const {setCurrentProduct} = useProducts
    

   
  return (
    <div className='card'>
         
            <div style={{backgroundImage: `url(${image})`}}  className="card-media">
                <h4 className='category-title'>{category}</h4>
                

            </div>
        
        <div className="product-card-details">
            <div className="name-price">
                <h5>{title.substring(0, 20)}</h5>
                <h5>${price}</h5>
            </div>
            <div className="rating">
                <h5>Rating</h5>
                <div className="rating-stats">
                    <Rating sx={{fontSize:'1rem'}} name="read-only" value={rating.rate} readOnly />
                    <h6>{rating.count} Rating Count</h6>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Product