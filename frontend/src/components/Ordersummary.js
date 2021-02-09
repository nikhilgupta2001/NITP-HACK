import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import './Ordersummary.css';

function Ordersummary() {
  const cartDetails = useSelector(state => state.cart);
  const { cartItems } = cartDetails;
  const [state,setState]=useState(1);
  
  let sum=0;
  let i=0;

  const onClickHandlerDecrease=(e)=>{
       setState(state-1);
  }
  const onClickHandlerIncrease=()=>{
    setState(state+1);
  }
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
            cartItems.map((cart) => {
               return(
                 cart.map((cartIt) =>{
                   return(
                    <tr>
                    <td>{cartIt.name}</td>
                    <td>Rs.{cartIt.price}</td>
                    <td>
                    <button onClick={onClickHandlerDecrease}><i class="fas fa-minus"></i></button>{state} <button onClick={onClickHandlerIncrease}> <i class="fas fa-plus"></i></button></td>
                    <td>Rs {state * cartIt.price}</td>
                  </tr>
                   )
                 }
               
               )
               )
              
            })
          }
          
        </tbody>
      </table>
      {/* <div className="card lg-shadow">
        <div className="row d-flex justify-content-end">
          <div class="col-md-12 col-sm-12 col-lg-12">
            <h4 className="font-weight-bold">Subtotal : Rs.{
              cartItems.map((item)=>{
                sum+=( item.price*state);
              })
            }
            {sum}
           </h4>
          </div>
        </div>
      </div> */}
    
      <Link to="/checkout" className="btn btn-block btn-dark text-light">Checkout</Link>
    </div>
  )
}
export default Ordersummary
