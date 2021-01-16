import React from 'react'
import vendor from '../../images/chef.jpg'
import { Link } from 'react-router-dom';
 
function Vendorcard({imageUrl,name,description,productId}){
    return (
        <div>
            <div className="col-md-4 col-xs-12 col-lg-4 mb-3 mt-3  col-sm-6  ">
                <div  data-aos="zoom-in-down" className="border border-success card shadow mx-auto px-auto  " style={{width: "18 rem"}}>
                    <img className="card-img-top" src={imageUrl}
                     alt="Card image cap"/>
                    <div className="card-body ">
                      <h5 className="card-title text-center font-weight-bold">{name}</h5>
                      <p className="card-text text-center">Sweets Maker </p>
                      <Link to={`/${productId}`} className="btn btn-success btn-block">Get Details</Link>
                    </div>
                  </div>
            </div>
        </div>
    )
}

export default Vendorcard
