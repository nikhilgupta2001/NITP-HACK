import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

//Reducers
import {cartReducer} from './reducers/cartReducers'
import {getProductsReducer,getProductDetailsReducer,getDishVendorReducer} from './reducers/productReducers'
import {getFoodsReducer,getFoodsDetailsReducer} from './reducers/foodReducers';
import { authReducer } from './reducers/authReducers';
const reducer=combineReducers({
  cart:cartReducer, 
  getProducts:getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  getFoods:getFoodsReducer,
  getFoodsDetails:getFoodsDetailsReducer,
  getDishVendorDetail:getDishVendorReducer,
  authReducer:authReducer
})

const middleware=[thunk];
const initalState={};


const store=createStore(
  reducer,initalState,
  compose(applyMiddleware(...middleware),
    //to see actions and state on  redux dev tools
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
);

export default store;