import React from 'react'
import VendorDishcard from './Card/VendorDishcard';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {getDishVendorDetail } from '../redux/actions/productActions';
import Spinner from './Spinner/Spinner';
 

function Dishvendor({match,history}) {
    
    const dispatch = useDispatch();
    const dishvendordetails = useSelector(state => state.getDishVendorDetail);
    console.log(dishvendordetails);
    const { products , loading, error } = dishvendordetails;
    useEffect(() => {
        dispatch(getDishVendorDetail(match.params.name))
}, [dispatch]);
    // const { vendordetails } = dishvendordetails;
    return (
        <div>
            
        {
            
            loading ? (
            <Spinner/>
            ): error ? ( 
           <h2>{error}</h2>                                          
    ) : (  
        <div>   
                <div className="jumbotron text-center bg-info text-white shadow">
        <div ><h1>Food Mania</h1>      
            <p>!!!!! Order now the <b data-aos="zoom-in" style={{fontSize:"30px"}} className="pl-2 pr-2 mt-3 font-weight-bold text-warning text-uppercase">{match.params.name} </b>of your mom's taste !!!!!</p>
        </div>
    </div>   
        <div className="container-fluid">
             <div className="row d-flex justify-content-center">
             {          
                         products.map((product)=><VendorDishcard key={product._id} 
                         dish={match.params.name}
                         name={product.name}
                         status={product.status}
                         imageUrl={product.imageUrl} />)  
             }
             </div>  
         </div> 

         </div>
    )
}
</div>
)
}

export default Dishvendor
