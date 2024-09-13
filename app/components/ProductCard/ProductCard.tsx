'use client';
import React from 'react'
import styles from './ProductCard.module.css'
type Props = {}

const ProductCard = (props: Props) => {
  return (
    <div>
        <button className='btn btn-primary' onClick={()=>console.log("Click")} >Add to cart</button>
    </div>
  )
}

export default ProductCard