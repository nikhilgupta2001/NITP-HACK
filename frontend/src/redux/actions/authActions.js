import * as actionTypes from '../constants/authConstants';
import axios from 'axios';

export const registerUser=(data)=>async(dispatch,getState)=>{
    // console.log(`${id}`);
    // When ever we have order   
    console.log("Hey Action Called");
     axios.post('/user/register',data)
    .then((res)=>{
        // history.push('/login')
        dispatch({
            type:actionTypes.SUCCESSFULLY_REGISTERED,
            payload:res
        })
    })
    .catch(err=> console.log(err));


    
    // localStorage.setItem('auth',JSON.stringify(getState().auth))
};