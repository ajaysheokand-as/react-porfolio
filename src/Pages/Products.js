import React from 'react';
import { ProductCard } from '../components/Product/ProductCard';
import { Auth } from '../hoc/Auth';

const Products = (props) => {
  return (
    <div className='m-5'>
        <ProductCard   />
    </div>
  )
}

export default Auth(Products);