import React from 'react'
import dish from '../../images/dish.jpg'
import { addToCart } from './../../redux/actions/cartActions';
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Dishcard({imageUrl,name,ratings,price,foodId}) {

    const dispatch = useDispatch();

    // const addToCardHandler=()=>{
    //     dispatch(addToCart(foodId))
    // }

    return (
                    <div className="col-md-4 col-xs-12  col-lg-4 col-sm-6">
                        <div data-aos="zoom-in-down" className="border border-success card shadow mx-auto px-auto " >
                            <img className="card-img-top" src={imageUrl} style={{height:"170px"}}
                                alt="Card image cap" />
                            <div className="card-body "> 
                                <h5 className="card-title text-center font-weight-bold">{name}</h5>
                                <p className="card-text text-center">Rs. {price}</p>
                                <p className="card-text text-center">{ratings}</p>
                                <Link to={`dishvendor/${name}`} className="btn btn-danger btn-block"><i className="fas fa-cart-plus"></i> Add To Cart </Link>
                            </div>
                        </div>
                    </div>
    )
}
