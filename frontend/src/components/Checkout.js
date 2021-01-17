import React from 'react'
import {Link} from 'react-router-dom'

export default function Checkout() {
    return (
        <div className="container">
            <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                <div className="card border border-success " style={{width:"100%"}} >
                    <h4 className="text-center font-weight-bold ">Checkout Form </h4>
                    <form className="mx-auto" action="/payout" method="POST">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email"  name="email"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword4">Password</label>
                                <input type="password" className="form-control" id="inputPassword4" placeholder="Password" name="password" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="Address"/>
                        </div>
                        <div className="form-group">
                            <label for="inputAddress2">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input type="text" className="form-control" id="inputCity" name="city" />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputState">State</label>
                                <input type="text" className="form-control" id="inputCity" name="state" />
                            </div>
                            <div className="form-group col-md-2">
                                <label for="inputZip">Zip</label>
                                <input type="text" className="form-control" id="inputZip" name="zip" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" for="gridCheck">
                                    Check me out
                </label>
                            </div>
                        </div>
                        {/* <button type="submit" form="form1" value="Submit">Submit</button> */}
                        <Link to="/" className="btn btn-block btn-dark text-light">Submit</Link>
                    </form>

                </div>
            </div>
        </div>
         
    )
}
