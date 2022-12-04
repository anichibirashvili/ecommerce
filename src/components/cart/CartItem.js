import { Divider, Typography } from '@mui/material'
import React from 'react'

const CartItem = ({cartItem}) => {
  return (
    <div>
        <Typography>{cartItem.product?.name}</Typography>
        <Typography>{cartItem.product?.price}</Typography>
        <Typography>{cartItem.quantity}</Typography>
        <Divider/>

        
    </div>
  )
}

export default CartItem