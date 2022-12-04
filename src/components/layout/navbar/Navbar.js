import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../../context/productContext'

const Navbar = () => {
  const {mainPageProducts}= useContext(ProductContext)
  return (
    <div>{mainPageProducts.categories?.length > 0 &&
      mainPageProducts.categories.map((category) => {
        return( 
        <div  key={category._id}>
        <Link 
        to={`/products/categories/${category.name}?page=1& sort=price, asc`}
        >{category.name}</Link> 
        
        </div>
        )
      })
  
    }</div>

  )
}

export default Navbar
