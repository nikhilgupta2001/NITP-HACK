import React from 'react'
import vendor from '../../images/chef.jpg'
import { Link } from 'react-router-dom';
import { addToCart } from './../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';

function VendorDishcard({imageUrl,name,status,productId,dish}){
    const dispatch=useDispatch();
    const addToCartHandler=()=>{
        console.log(dish);
        dispatch(addToCart(dish));
    }
    return (
      
        <div>
            <div className="col-md-4 col-xs-12 col-lg-4 col-sm-6 m ">
                <div  data-aos="zoom-in-down" className="border border-success card shadow mx-auto px-auto mr-4 mb-2 ml-4 mt-2 " style={{width: "20rem"}}>
                    <img className="card-img-top" src={imageUrl} style={{height:"190px"}}
                     alt="Card image cap"/>
                    <div className="card-body ">
                      <h5 className="card-title text-center font-weight-bold">{name}</h5>
                      <p className="card-text text-center">{status}</p>
                      <Link to="#" className="btn btn-danger btn-block" onClick={addToCartHandler}><i class="fas fa-shopping-cart"></i> Add to Cart</Link>
                    </div>
                  </div>
            </div>
        </div>
    )
}

export default VendorDishcard