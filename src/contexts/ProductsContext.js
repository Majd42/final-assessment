import { createContext, useContext, useEffect, useState, } from "react";


const ProductsContext = createContext()


export const useProducts = () => {
    return useContext(ProductsContext)
}


export const ProductsProvider = ({children}) => {


    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(10)
    // const [currentProducts, setCurrentProducts] = useState([])
    var [category, setCategory] = useState('all')
    const [categories, setCategories] = useState([])
    const indexOfLastProduct= currentPage*productsPerPage;
    const indexOfFirstProduct= indexOfLastProduct -productsPerPage
    const [loading, setLoading] = useState(false)
    const [currentProduct, setCurrentProduct] = useState()
    const [categoryProducts, setCategoryProducts] = useState()



    const fetchProducts = async () =>{
       
        // fetch('https://fakestoreapi.com/products')
        //     .then(res=>
        //         {
        //             if(res.ok)return res.json()
        //             res.json().then(json => Promise.reject(json))
        //         })
        //     .then(json=>setProducts(json))
            
           const fetchData = await fetch('https://fakestoreapi.com/products')
           const data = await fetchData.json()
           
           setProducts(data)
        }
       
    

    const fetchCategoryProducts = () => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then(json=>{
                setCategoryProducts(json)
                if(categoryProducts !==undefined) {
                    setProducts(categoryProducts)
                }
            })

            
    }


 

    // const getCurrentProducts= () => {
    //     setCurrentProducts(products.slice(indexOfFirstProduct, indexOfLastProduct))
        
    // }


    const fetchCategories= () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json))
    }
    

    console.log(category)
    
    
    
    useEffect(() => {
        fetchCategoryProducts()
        
      },[category])
    useEffect(() => {
        fetchProducts()
        fetchCategories()
        
      },[])

    //   useEffect(() => {
    //     getCurrentProducts()
    //   }, [currentPage])


    //   useEffect(() => {
    //     fetchCategoryProducts()
    //   },[category])



      const currentProducts =  products.slice(indexOfFirstProduct, indexOfLastProduct)

    //   console.log('product',products)
    //   console.log('cproduct',currentProducts)

    return   (
        <ProductsContext.Provider value={
            {
                currentProducts,
                currentPage,
                setCurrentPage,
                category,
                categories,
                setCategory,
                loading,
                setCurrentProduct,
                currentProduct,
                categoryProducts
            }
        }>
            {children}
        </ProductsContext.Provider>
    )
}