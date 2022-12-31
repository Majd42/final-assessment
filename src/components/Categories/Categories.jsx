import React from 'react'
import './styles.css'
import { useProducts } from '../../contexts/ProductsContext'
import { useAuth } from '../../contexts/AuthContext'

const Catagories = () => {

  const {loggedin} = useAuth()
  const {setCategory, categories} = useProducts()

  const handleChangeCategory = (e) => {
    setCategory(e.target.textContent)
  }

    // const categories = ['Fashion', 'Furniture', 'jewelery', 'Video Game', "men's clothing", 'Books', 'Sports', 'Tools', 'Health' ]
  return (
    loggedin &&
    <section className='catagories'>
        <div className="catagories-container">
            <h3>All Catagories  |</h3>
            {categories.map(category => (
                <button onClick={handleChangeCategory} key={category} className='catagory-btn'>
                 {category}
                </button>
            ))}
        </div>
    </section>
  )
}

export default Catagories