
import React, { createContext, useReducer, useContext,useCallback } from 'react';
import axios from 'axios';

const InitialState={
    items:[],//adding product  in cart 
    productData:[]//adding product data  for sorting  throught api
}
const cartReducer = (state,action) => {
    console.log('cart reducer is called ',action.type);
    switch (action.type) {
        case 'AddProduct':  // if one product already exist then recalculate  quantity          
                const existingItemIndex =state.items.findIndex((item)=>item._id===action.payload._id)               
                if(existingItemIndex>=0){
                    const updatedItems= state.items.map(
                        (item,index) =>
                            index===existingItemIndex ?{...item,quantity:item.quantity +action.payload.quantity}:item
                        )                       
                        return { ...state,items:updatedItems}
                }else{
                    return {...state,items:[...state.items,action.payload]}
             }
        case 'removeProduct':
          console.log(action.payload,'payload id');
            return {...state,items:state.items.filter((item) => item._id!==action.payload )}
        
        case 'updateQuantity':// if count increased or decreased , then it update quantity
          const map =state.items.map(item =>
            item._id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item )
          return {
            ...state,
            items:map ,
          };
        case 'fetchData':
                      return {...state,productData:action.payload.data}
       
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
   
    
}

const CartContext=createContext()
 const CartProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(cartReducer, InitialState)

    const AddProduct=  useCallback(
      (item) => {
        dispatch({type:'AddProduct',payload:item})
      },
      [],    )    
    const removeProduct = useCallback(
      (id) => {
        dispatch({type:'removeProduct',payload:id})
      },
      [],) 
      const updateQuantity=useCallback(
        (id,quantity) => {
          dispatch({type:'updateQuantity', payload:{id,quantity}})
        },
        [],
      )
      const fetchData= useCallback((data) => {
        axios.post('http://localhost:5000/API/getAllProduct',data,{headers:'application/json'})
        .then((response) => {dispatch({type:'fetchData',payload:response.data}) })
        
       },[])
      
    
    return (    <CartContext.Provider value={{state ,AddProduct,removeProduct,updateQuantity,fetchData}} >
               {children}</CartContext.Provider>        )
}
 const useCart = () => {
    const context =useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
      }
    return context

}

export {CartContext,useCart}
export default CartProvider
