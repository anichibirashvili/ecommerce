 import React, { useContext } from 'react'
import { ProductContext } from '../../context/productContext'
import Loading from '../shared/loading'
import ProductCard from './ProductCard'
 
 const MainPage = () => {
    const {mainPageProducts, mainPageLoading} = useContext(ProductContext)
   return (
     <div>
      {mainPageLoading && <Loading/>}
      {mainPageProducts.products?.length > 0 && mainPageProducts.products.map((product) => {
        return <ProductCard key={product._id} product={product}/>;
      })}

     </div>
   )
 }
 
 export default MainPage