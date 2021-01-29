import React from 'react'
import './RecomVendor.css'
import Vendorcard from './Card/Vendorcard'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../redux/actions/productActions'
import Spinner from './Spinner/Spinner';

function Vendor() {
    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;
    
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        
    <div>
      <div className="jumbotron text-center bg-info text-white shadow">
        <div ><h1>Food Mania</h1>      
            <p>!!!!! Order now the food of your mom's taste !!!!!</p>
        </div>
    </div>
      
    <div className="container-fluid">
        <div className="row d-flex justify-content-center">
        
                    {loading? (
                    <Spinner/>
                    ):error?(
                        <h2>{error}</h2>
                    ):(
                         products.slice(0,6).map((product)=><Vendorcard key={products._id} 
                         productId={product._id}
                         name={product.name}
                         description={product.description}
                         imageUrl={product.imageUrl}/>)
                    )
                    }

                </div>
        </div>
    </div>
    
   
    )
}

export default Vendor