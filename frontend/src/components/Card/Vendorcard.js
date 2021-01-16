import React from 'react'
import vendor from '../../images/chef.jpg'
import { Link } from 'react-router-dom';
 
function Vendorcard({imageUrl,name,status,productId}){
    return (
        <div>
            <div className="col-md-4 col-xs-12 col-lg-4 col-sm-6 m ">
                <div  data-aos="zoom-in-down" className="border border-success card shadow mx-auto px-auto mr-4 mb-2 ml-4 mt-2 " style={{width: "20rem"}}>
                    <img className="card-img-top" src={imageUrl} style={{height:"190px"}}
                     alt="Card image cap"/>
                    <div className="card-body ">
                      <h5 className="card-title text-center font-weight-bold">{name}</h5>
                      <p className="card-text text-center">{status}</p>
                      <Link to={`/vendor/${productId}`} className="btn btn-success btn-block">Get Details</Link>
                    </div>
                  </div>
            </div>
        </div>
    )
}

export default Vendorcard
