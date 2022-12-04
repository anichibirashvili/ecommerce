import React from 'react'
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

const CategoryProductList = ({data}) => {
  return (
    <Grid container spacing={2}>
    {data.products?.length > 0 &&
      data.products.map((product) => {
        return (
          <Grid key={product._id} item xs={4} style={{ marginTop: "50px" }}>
            <ProductCard product={product} />
          </Grid>
        );
      })}
  </Grid>
  )
}

export default CategoryProductList