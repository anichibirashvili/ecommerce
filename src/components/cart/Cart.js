import { Button, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import CartItem from './CartItem';
import {userContext} from '../../context/userContext'



const Cart = () => {
    const {cartState, saveUserCart} = useContext(cartContext);
    const {userData} = useContext(userContext);
  return (
    <div>
        {cartState.cart?.length > 0 ? (
            cartState.cart?.map((cartItem) => {
        return <CartItem key={cartItem.product._id} cartItem={cartItem}/>;
        })
        ) : ( 
        <Typography>cart is empty</Typography>
        )}

        {userData && <Button onClick={() => saveUserCart(userData._id)}>save</Button> }
        
        </div>
  );
};

export default Cart;