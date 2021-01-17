import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart=(name)=>async(dispatch,getState)=>{
    // console.log(`${id}`);
    console.log(name);
    const {data}=await axios.get(`/dishvendor/api/foods/${name}`);
    console.log(data);
    dispatch({
        type:actionTypes.ADD_TO_CART,
        payload:data
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


