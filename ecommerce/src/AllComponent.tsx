
import React, {  useMemo, } from 'react'
import Products from './Products'
import { useCart } from './Store/CartProvider'

const AllComponent = () => {
    const{state} = useCart()

  
    
  return (
    <div>
       <Products ProductData={state.productData}></Products>
    </div>
  )
}

export default AllComponent