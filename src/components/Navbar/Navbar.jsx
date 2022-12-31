import React from 'react'
import LOGO from '../../assets/logo/logo.svg'
import './styles.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {

  const {loggedin} = useAuth()

  return (
      loggedin &&
    <nav>
      

        <div className="nav-logo">
          <img src={LOGO} alt="logo" />
          <h1 className='store-title'>Store</h1>
        </div>
        <div className="nav-search-container">
          <input className='nav-search-input'   type="text"  placeholder='What are you looking for ?' />
          <button className='search-btn'><SearchIcon className='search-icon' /></button>
        </div>
        <div className="status">
          <button className='profile-btn'><PersonIcon /></button>
          <button className='cart-btn'><Badge badgeContent={2} color='error' ><ShoppingCartIcon  /></Badge></button>
        </div>
      
    </nav>
  
)
  
}

export default Navbar