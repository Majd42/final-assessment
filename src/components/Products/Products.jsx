import { Button, Grid } from '@mui/material'
import React from 'react'
import { useProducts } from '../../contexts/ProductsContext'
import Product from './Product/Product'
import './styles.css'
import { Link } from 'react-router-dom'

const Products = () => {

    const {currentProducts, setCurrentProduct, } = useProducts()
    const handleOpenProduct = (product) => {
        setCurrentProduct(product)
    }

    

  return (
    <section className='porducts'>
        <Grid sx={{display:'flex', justifyContent:'center',alignItems:'center'}} container spacing={3}>
            
            {currentProducts.map(product => (
                <Grid key={product.id} item xs={2.2}>
                    <Link to={'/home/productDetails'}>
                    
                        <button onClick={() => handleOpenProduct(product)}   className='router-link'>
                            <Product    {...product} />
                        </button>
                    </Link>
                </Grid>
            ))}
        </Grid>
    </section>
  )
}

export default Products