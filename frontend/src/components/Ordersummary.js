import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import './Ordersummary.css';

function Ordersummary() {
    const cartDetails = useSelector(state => state.cart);
    const {cartItems} = cartDetails;
    return (
        
        <div className="container">
  <h2>Order Summary</h2>
  <p>List of Items in our <b>CART</b></p>            
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Item Name</th>
        <th>Item Price</th>
        <th>Item Qty</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
     {  
        cartItems.map( (cartIt )  =>{
            return(
            <tr>
            <td>{cartIt.name}</td>
              <td>Rs.{cartIt.price}</td>
              <td>1</td>
              <td>Rs.1 * {cartIt.price}</td>
            </tr>
            )
         })
     }
      
      
      
    </tbody>
  </table>
<div className="card lg-shadow">
    <div className="row d-flex justify-content-end">
         <div class="col-md-12 col-sm-12 col-lg-12">
              <h4 className="font-weight-bold">Subtotal : Rs. </h4>
             </div>
             <div class="col-md-12 col-sm-12 col-lg-12">
             <h4 className="font-weight-bold">Shipping: Rs. </h4>
             </div>
             <div class="col-md-12 col-sm-12 col-lg-12">
             <h4 className="font-weight-bold">Total: Rs. </h4>
             </div>
        </div>
    </div>
  

</div>
        
    )
}

export default Ordersummary
