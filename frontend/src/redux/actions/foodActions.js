import * as actionTypes from '../constants/foodConstants';
import axios from 'axios';

export const getFoods=()=>async(dispatch)=>{
    try{
       dispatch({type:actionTypes.GET_FOODS_REQUEST});

       const {data} =await axios.get('api/foods');
        
       dispatch({
           type:actionTypes.GET_FOODS_SUCCESS,
           payload:data,
       })
    }  
    catch(error){
        dispatch({
            type:actionTypes.GET_FOODS_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            :error.message,
        }); 
    }
};


export const getFoodDetails=(id)=>async(dispatch)=>{
    try{
       dispatch({type:actionTypes.GET_FOOD_DETAILS_REQUEST});

       const {data} =await axios.get(`api/foods/${id}`);

       dispatch({
           type:actionTypes.GET_FOOD_DETAILS_SUCCESS,
           payload:data,
       })
    }
    catch(error){
        dispatch({
            type:actionTypes.GET_FOODS_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            :error.message,
        }); 
    }
};


export const removeFoodDetails=()=>(dispatch)=>{
    dispatch({
        type:actionTypes.GET_FOOD_DETAILS_RESET,
    });
    
    

}



