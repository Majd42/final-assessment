import React from 'react'
import Products from '../../components/Products/Products'
import Categories from '../../components/Categories/Categories'
import { Pagination } from '@mui/material'
import './styles.css'
import { useProducts } from '../../contexts/ProductsContext'
import Navbar from '../../components/Navbar/Navbar'
const Home = () => {
 

  const {setCurrentPage, category} = useProducts()
  return (
    <div>
        {/* <Navbar /> */}
        {/* <Categories /> */}
        {category!=='all' ?
          <div className='def-category'>
            <h1>Shop Now in <span className='category'>{category}</span> category </h1>
          </div>:''}
        <Products />
        <Pagination onChange={(e) => {setCurrentPage(e.target.textContent)}} count={2} />
    </div>
  )
}

export default Home