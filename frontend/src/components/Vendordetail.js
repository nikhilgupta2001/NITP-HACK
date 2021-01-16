import React from 'react'
import './Vendordetail.css'

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails  } from '../redux/actions/productActions';

// Spinner 
import Spinner from './Spinner/Spinner';

import dish from '../images/dish.jpg'
import chef from '../images/chef.jpg'

function Vendordetail({ match,history }) {
    const dispatch = useDispatch();
    const ProductsDetails = useSelector(state => state.getProductDetails);
    
  const {product , loading , error } = ProductsDetails;
   
    useEffect(() => {
       if(product && match.params.id!==product._id){
           dispatch(getProductDetails(match.params.id))
       }
    }, [dispatch,match,product]);

    
   

    return (
        <div>
            <div className="jumbotron text-center bg-info  shadow">
                <div className="page-content page-container" id="page-content" >
                    <div className="padding-md-none">
                        <div className="row d-lg-flex justify-content-center">
                            <div className="col-xl-8 col-md-12 col-sm-12">
                                <div className="card user-card-full">
                                    <div className="row m-l-0 m-r-0">
                                        <div className="col-sm-4 bg-c-lite-green user-profile">
                                            <div className="card-block text-center text-dark">
                                                <div className="m-b-25"> <img src={chef} className="img-radius" alt="User-Profile-Image" /> </div>
                                                    <h4 className="f-w-600"></h4>
                                                    <p><b></b></p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                                </div>
                                            </div>
                                            <div className="col-sm-8">
                                                <div className="card-block">
                                                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <p className="m-b-10 f-w-600">Email</p>
                                                            <h6 className="text-muted f-w-400">rntng@gmail.com</h6>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <p className="m-b-10 f-w-600">Phone</p>
                                                            <h6 className="text-muted f-w-400">98979989898</h6>
                                                        </div>
                                                    </div>
                                                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Other Details</h6>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <p className="m-b-10 f-w-600">Timings</p>
                                                            <h6 className="text-muted f-w-400">10AM - 9PM</h6>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <p className="m-b-10 f-w-600">Experience</p>
                                                            <h6 className="text-muted f-w-400">2 years</h6>
                                                        </div>
                                                    </div>
                                                    <ul className="social-link text-danger list-unstyled m-t-40 m-b-10">
                                                        <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                                        <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                                        <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-4 col-xs-12  col-lg-3 col-sm-6">
                            <div data-aos="zoom-in-down" className="border border-success card shadow mx-auto px-auto " >
                                <img className="card-img-top" src={dish}
                                    alt="Card image cap" />
                                <div className="card-body ">
                                    <h5 className="card-title text-center font-weight-bold">Special Thali</h5>
                                    <p className="card-text text-center">Rs. 180</p>

                                    <a href="#" className="btn btn-danger btn-block">  <i className="fas fa-cart-plus"></i> Add To Cart </a>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>
            </div>   
    )
}

export default Vendordetail
