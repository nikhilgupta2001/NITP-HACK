import * as actionTypes from "../constants/productConstants";
const initialState = {
  products: [],
  loading:true
};
export const getProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        products: [],
      };

    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        ...state,

        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAILS_RESET:
      return {
        products: {},
      };

    default:
      return state;
  }
};


export const getDishVendorReducer=(state=initialState,action)=>{
  switch (action.type){

    case actionTypes.GET_DISHVENDOR_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_DISHVENDOR_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case actionTypes.GET_DISHVENDOR_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_DISHVENDOR_DETAILS_RESET:
      return {
        products: {},
      };

    default:
      return state;

  }
}