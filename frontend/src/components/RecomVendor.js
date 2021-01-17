import React from 'react'
import './RecomVendor.css'

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../redux/actions/productActions';
import { getFoods as listFoods } from '../redux/actions/foodActions';
import Vendorcard from './Card/Vendorcard';
import Spinner from './Spinner/Spinner';
import Dishcard from './Card/Dishcard';


function RecomVendor() {
    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProducts);
    const getFoods=useSelector(state=>state.getFoods);
    const { products, loading, error } = getProducts;
    const {foods}=getFoods;


    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    useEffect(() => {
        dispatch(listFoods())
    }, [dispatch ])

    


    return (
        <div>
            <div class=" mt-4 lg-shadow jumbotron jumbotron-fluid bg-light">
                <div class="container">
                    <h1 class="display-4 text-dark">Best Chef from Food Mania </h1>
                    <p class="lead text-dark">Let's try the taste of our special chefs.</p>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    {
                    loading? (
                    <Spinner/>
                    ):error?(
                        <h2>{error}</h2>
                    ):(
                         products.slice(0,6).map((product)=><Vendorcard key={products._id} 
                         productId={product._id}
                         name={product.name}
                         phonenumber={product.phonenumber}
                         imageUrl={product.imageUrl}
                         status ={product.status}
                         />)
                    )
                    }

                </div>
            </div>

            {/* Food Recommdation Start */}
            <div class=" mt-4 lg-shadow jumbotron jumbotron-fluid bg-light">
                <div class="container">
                    <h1 class="display-4 text-dark">Best Food from Food Mania </h1>
                    <p class="lead text-dark">Let's try the best taste of Food Mania</p>
                </div>
            </div>




            {/* End */}

            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    
                {loading? (
                    <Spinner/>
                    ):error?(
                        <h2>{error}</h2>
                    ):(
                         foods.slice(0,6).map((food)=><Dishcard key={food._id} 
                         foodId={food._id}
                         name={food.name}
                         price={food.price}
                         ratings={food.rating}
                         description={food.description}
                         imageUrl={food.imageUrl}/>)
                    )
                    }

                </div>
            </div>
        </div>
    )
}

export default RecomVendor

