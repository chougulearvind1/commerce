import React, { FC } from 'react'

interface prop{
  total:number,
  itemCount:number
}
const CartSummary:FC<prop> = ({total,itemCount}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Cart Summary</h4>
        <p className="card-text">Items: {itemCount}</p>
        <p className="card-text">Total: ₹{total.toFixed(2)}</p>
        <button className="btn btn-success w-100">Buy Now</button>
      </div>
    </div>
  );
}

export default CartSummary