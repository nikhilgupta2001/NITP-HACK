import * as actionTypes from '../constants/authConstants';
const initialState = {
    isAuthenticated:false,
    auth:{}
};


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SUCCESSFULLY_REGISTERED:
            console.log("HELLO I AM HERE");

            return {
                ...state,
                isAuthenticated:(action.payload!=null),
                auth: action.payload
            };
        default:
            return state;

    }
}