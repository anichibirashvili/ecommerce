import { Button, Card, CardActions, CardContent, Typography, Rating} from '@mui/material'
import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { instance } from '../../app/instance'
import { isUserAdmin } from '../../app/util'
import { ADD_TO_CART, cartContext } from '../../context/cartContext'
import { ProductContext } from '../../context/productContext'
import { userContext} from '../../context/userContext'

const ProductCard = ({product}) => {
  const [productRating, setProductRating] =useState(product.averageRating);
  const {userData} = useContext(userContext);
  const {addToCart, removeFromCart, cartState}= useContext(cartContext);
  const {getData, setSelectedProduct} = useContext(ProductContext);
  const navigate = useNavigate();
  const location= useLocation();


  const onRatingChange = async (e) => {
    e.preventDefault();
    setProductRating(e.target.value);
    try {
      await instance.post(
        `/products/${product._id}/users/${userData._id}/rate`,
        { rating: +e.target.value,}
        );

        const endpoint =
        location.pathname !== '/' 
        ? `${location.pathname}${location.search}` 
        : "/products";

        await getData(endpoint);

    } catch (error) {
      
    }

  };

  const productInCart= cartState.cart?.find(
    (cartItem) => cartItem.product?._id === product._id
  );

  const onEditHandler = (e, product ) => {
    e.preventDefault();
    setSelectedProduct(product);
    navigate(`/products/${product._id}/edit`)

  };


  return (

    <Card>
        <CardContent>
            <img src={product.image} width="100" height="100"/>
            <Link 
            to={`/products/categories/${product.category}/${product.name}`}
            state={{ id: product._id, category: product.category }}
            >
            <Typography>{product.name}</Typography>
            </Link>
            <Typography>$ {product.price}</Typography>
            <Rating
            value={productRating}
            onChange={onRatingChange}
            precision={0.5}
          />


        </CardContent>
        <CardActions>
          {productInCart ? (
          <>
          <Button onClick={() => removeFromCart(product._id)}>-</Button>
          <Typography>{productInCart.quantity}</Typography>
          <Button onClick={() => addToCart(product)}>+</Button>
          
          
          </>
        ) : (
          <Button onClick={()=>addToCart(product)}>add to cart</Button>
        )}

          {isUserAdmin() && <Button onClick={(e) => onEditHandler(e, product)}>Edit</Button>}

        </CardActions>
    </Card>
  )
}

export default ProductCard
