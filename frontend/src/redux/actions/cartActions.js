import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart=(id)=>async(dispatch,getState)=>{
    // console.log(`${id}`);
    const {data}=await axios.get(`api/foods/${id}`);
    dispatch({
        type:actionTypes.ADD_TO_CART,
        payload:{
            product:data._id,
            name:data.name,
            description:data.description,
            price:data.price,
            imageUrl:data.imageUrl,
        }
    })
     localStorage.setItem('cart',JSON.stringify(getState().cart.cartItems))
};


export const removeFromCart=(id)=>(dispatch,getState)=>{
    dispatch({
        type:actionTypes.REMOVE_FROM_CART,
        payload:id
    })

    localStorage.setItem('cart',JSON.stringify(getState().cart.cartItems))
};


