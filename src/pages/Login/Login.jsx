import React from 'react'
import LOGO from '../../assets/logo/logo.svg'
import './styles.css'
import { useNavigate } from "react-router-dom"
import { useAuth } from '../../contexts/AuthContext'

const Login = () => {


  const {setLoggedin} = useAuth()

  const navigate= useNavigate()
  const handleLogin = () => {
    setLoggedin(true)
    navigate('/home')
  }
  return (
    <div className='login-container'>
      <div className='login-paper' >
       
        <img
          className='logo-img'
          src={LOGO}

        />
        <h2>LOG IN TO OUR ONLINE STORE </h2>
        <form className='login-form'>
          <div className="form-control">
            <input className='input' type='text' placeholder='Email Address' />
          </div>
          <div className="form-control">
            <input className='input' type='password' placeholder='password' />
          </div>
          <button onClick={handleLogin} type='submit' className='submit-btn'  >Login</button>
        </form>
        <div className="sign-up">
          <h4>don't have an account ? <span><button className='signup-btn'>signup</button></span></h4>
        </div>
      </div>
      
    </div>
  )
}

export default Login