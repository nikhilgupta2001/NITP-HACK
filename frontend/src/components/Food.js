import React from 'react'
import Dishcard from './Card/Dishcard'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from './Spinner/Spinner';
// import { getFoods} from '../redux/actions/foodActions'
export default function Food() {
    const dispatch = useDispatch();
    const getFoods=useSelector(state=>state.getFoods);

    const {foods,loading,error}=getFoods;


    // useEffect(() => {
    //     dispatch(listFoods())
    // }, [dispatch])

    return (
       <div>
      <div className="jumbotron text-center bg-info text-white shadow">
        <div ><h1>Food Mania</h1>      
            <p>!!!!! Order now the food of your mom's taste !!!!!</p>
        </div>
    </div>
     
    <div className="container-fluid">
        <div className="row d-flex justify-content-center">
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
    </div>
        
    )
}
