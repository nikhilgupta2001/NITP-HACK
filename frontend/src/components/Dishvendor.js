import React from 'react'
import Vendorcard from './Card/Vendorcard';
import { useSelector, useDispatch } from 'react-redux';


function Dishvendor() {
    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;
    return (
        <div>
            <Vendorcard />
        </div>
    )
}

export default Dishvendor
