import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react';



interface ProductProp {
    product:any,
    AddProduct: (product:any) => {  }
}
const Product:React.FC<ProductProp> = ({product,AddProduct}) => {
    
     
    const [productImgUrl] = useState(`http://localhost:5000/productImg/${product.productImg.filename}`)
    console.log(product.quantity,'state');
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
    <div className="card h-100">
      <img style={{aspectRatio:1/1}}
        src={productImgUrl}
        className="card-img-top"
        alt="Symbol Premium Mens Wrinkle-Resistant Regular Fit Cotton Formal Shirt"
      />
      <div className="card-body d-flex mt-auto flex-column justify-content-around">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">
          {product.content}
        </p>
        <p className="card-text">Price:{product.price}</p>
        <a href="#xcx" className="btn btn-primary" onClick={(e) => { e.preventDefault(); AddProduct(product) }} role='button'>
          <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
        </a>
      </div>
    </div>
  </div>
  )
}

export default Product