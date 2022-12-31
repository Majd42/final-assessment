import React from "react";
import {Routes, Route,} from 'react-router-dom'
import Login from "./pages/Login/Login.jsx";
import Home from './pages/Home/Home.jsx'
import { ProductsProvider } from "./contexts/ProductsContext.js";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Categories from "./components/Categories/Categories.jsx";
import { AuthProvider } from "./contexts/AuthContext.js";



function App() {


  return (
    <>
      <ProductsProvider>
        <AuthProvider>

          <Navbar />
          <Categories />
          <Routes>
            
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/productDetails" element={<ProductDetails />} />
          </Routes>
        </AuthProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
