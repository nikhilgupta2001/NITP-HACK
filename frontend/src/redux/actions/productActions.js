import * as actionTypes from '../constants/productConstants';
import axios from 'axios';

export const getProducts=()=>async(dispatch)=>{
    try{
       dispatch({type:actionTypes.GET_PRODUCTS_REQUEST});

       const {data} =await axios.get('api/products');

       dispatch({
           type:actionTypes.GET_PRODUCTS_SUCCESS,
           loading:false,
           payload:data,
       })
    }  
    catch(error){
        dispatch({
            type:actionTypes.GET_PRODUCTS_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            :error.message,
            
        }); 
    }
};

export const getProductDetails=(id)=>async(dispatch)=>{
    try{
       dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQUEST});
       console.log(id);
       const {data} =await axios.get(`/vendor/api/products/${id}`);
        console.log(data);
       dispatch({
           type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
           payload:data,
       })
    }  
    catch(error){
        dispatch({
            type:actionTypes.GET_PRODUCT_DETAILS_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            :error.message,
        }); 
    }
};


export const removeProductDetails=()=>(dispatch)=>{
    dispatch({
        type:actionTypes.GET_PRODUCT_DETAILS_RESET,
    });
}

export const getDishVendorDetail = (name)=>async(dispatch)=>{
    try{
        dispatch({type:actionTypes.GET_DISHVENDOR_DETAILS_REQUEST});
        console.log(name);
        const {data} =await axios.get(`/dishvendor/api/products/${name}`);
         console.log(data);
        dispatch({
            type:actionTypes.GET_DISHVENDOR_DETAILS_SUCCESS,
            payload:data,
        })
     }  
     catch(error){
         dispatch({
             type:actionTypes.GET_DISHVENDOR_DETAILS_FAIL,
             payload:error.response && error.response.data.message
             ? error.response.data.message
             :error.message,
         }); 
     }
}

export const placeOrder=(data)=>async(dispatch)=>{
        // await axios.get('/payout')
        console.log(data);
        axios.post('/payout',data)
        .then( res =>console.log(res))
        .catch(err=> console.log(err));
}    