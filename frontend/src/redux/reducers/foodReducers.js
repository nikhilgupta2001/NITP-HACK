import * as actionTypes from '../constants/foodConstants';

const initialState={
    foods:[],
}
export const getFoodsReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.GET_FOODS_REQUEST:
           return {
               loading:true,
               foods:[]
           }

           case actionTypes.GET_FOODS_SUCCESS:
               return{
                   loading:false,
                   foods:action.payload
               }
               case actionTypes.GET_FOODS_FAIL:
                  return{
                      loading:true,
                      error:action.payload
                  }


                  default:
                       return state;

            }
};

export const getFoodsDetailsReducer=(state={foods:{}},action)=>{
    switch(action.type){
        case actionTypes.GET_FOOD_DETAILS_REQUEST: 
        return {
            loading:true,
            
        }

        case actionTypes.GET_FOOD_DETAILS_SUCCESS:
            return{
                loading:false,
                foods:action.payload
                
            }
    
    
        case actionTypes.GET_FOOD_DETAILS_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case actionTypes.GET_FOOD_DETAILS_RESET:
            return{
                foods:{}
            }
    
            
            default:
                return state;
    
    }
        
}