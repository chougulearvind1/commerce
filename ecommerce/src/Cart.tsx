import React, { useState } from 'react'

import CartSummary from './CartComponent/CartSummary'
import { useCart } from './Store/CartProvider'
import CartItem from './CartComponent/CartItem'


const Cart = () => {
   const{state,removeProduct,updateQuantity}=useCart();

   const total=state.items.reduce((total: number,item: { quantity: number; price: number }) =>  total=total+ item.quantity * item.price ,0)
   const itemCount=state.items.reduce((count: any ,item: { quantity: any }) => count+=item.quantity,0)
   
  return (
    <div className='Container'>
      <div className="d-flex flex-column-reverse flex-sm-row">
        <div className="col-lg-8 col-md-8 col-sm-8 ">
          {state.items && state.items.map((item: any) => { 
           return <CartItem product={item} removeProduct={removeProduct} updateQuantity={updateQuantity}></CartItem>
           })}
            
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 ">
            <CartSummary total={total} itemCount={itemCount}></CartSummary>
        </div>
      </div>
        

    </div>
  )
}

export default Cart