import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

interface prop{
  product:any,
  removeProduct:(arg0: String) => {  },
  updateQuantity:(arg0: String,arg1: number) => {  }
}

const CartItem:React.FC<prop> = ({product,removeProduct,updateQuantity}) => {
  const [productImgUrl] = useState(`http://localhost:5000/productImg/${product.productImg.filename}`)
    return (
        <div className="row border-bottom py-3">
          <div className="col-md-2 col-sm-4 col-4">
            <img src={productImgUrl} alt={product.name} className="img-fluid" />
          </div>
          <div className="col-md-10 col-sm-8 col-8">
            <div className='d-md-flex'>
              <div className="col-md-8">
              <h5>{product.title}</h5>
              <h6>{product.content}</h6>
            <p>₹{product.price}</p>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                value={product.quantity}
                min="1"
                onChange={(e) => { updateQuantity(product._id,parseInt(e.target.value)) }}
              />
            </div>
            </div>
            
            <div className="col-md-3 d-md-flex align-items-center justify-content-end ">
            <button className="btn btn-danger mt-3" onClick={(e) => { e.preventDefault();removeProduct(product._id) }} >
              <FontAwesomeIcon icon={faTrash} /> Remove
            </button>
          </div>
            </div>
            
          </div>
          
        </div>
      );
}

export default CartItem