import { Pagination } from '@mui/material';
import React from 'react'

const PaginationComponent = ({totalPages, page, changePage}) => {
  return <Pagination 
  count={totalPages} 
  page={page} 
  onChange={(_,value) => {
    changePage("page", +value);
  }}
  />
}

export default PaginationComponent;