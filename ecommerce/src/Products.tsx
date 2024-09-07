
import React, { useMemo } from 'react'
import Product from './Product'
import { useCart } from './Store/CartProvider'

interface productsProp{
   ProductData:any
}
const Products:React.FC<productsProp> = ({ProductData}) => {
    
    const {AddProduct,state}=useCart();
    console.log(state,'state');
    const productMemo= useMemo(() => {
       return (ProductData && ProductData.map(
            (product:any) =>{             
              product={...product,quantity:1}            
            return <Product AddProduct={AddProduct}  product={product} key={product._id}></Product>}
                ))
        } , [AddProduct, ProductData])
  return (
    <div className='row'>
        {productMemo}
    </div>
  )
}

export default Products