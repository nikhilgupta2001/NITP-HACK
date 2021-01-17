import * as actionTypes from '../constants/foodConstants';
const initialState={
    user : [],
    loading:false,
}
export const GetProfile = (state = initialState,action)=>{
    switch(action.type)
    {
        case actionTypes.GET_PROFILE : return {
            ...state,
            loading:true,
            user:[],
        }
        case actionTypes.GOT_PROFILE : return {
            ...state,
            loading:false,
            user:action.payload,
        }
         default : return state
    }
}
