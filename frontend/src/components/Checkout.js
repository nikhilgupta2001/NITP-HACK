import React,{useState} from "react";
// import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { placeOrder } from "../redux/actions/productActions";

export default function App() {
  const dispatch = useDispatch();
  const [email,setEmail]=useState("");
  const [zip,setZip]=useState("");
  const [address,setAddress]=useState("");
  const [city,setCity]=useState("");
  const [state,setState]=useState(""); 

  // const { register, handleSubmit } = useForm();
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e);
      const data={
        email,
        zip,
        address,
        city,
        state
      }
      dispatch(placeOrder(data));
    // dispatch(placeOrder(data));
  };
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
          <div style={{ width: "100%" }} className="card lg-shadow"></div>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter email"
                value={email}
                onChange={e=>setEmail(e.target.value)}
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">zip</label>
              <input
                // type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="zip"
                value={zip}
                onChange={e=>setZip(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Address</label>
              <input
                // type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Address"
                value={address}
                onChange={e=>setAddress(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">City</label>
              <input
                // type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="City"
                value={city}
                onChange={e=>setCity(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">state</label>
              <input
                // type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="state"
                value={state}
                onChange={e=>setState(e.target.value)}
              />
            </div>
            <Link to="/"><button type="submit" class="btn btn-primary">
              Submit
            </button></Link>
          </form>
        </div>
      </div>
    </div>
  );
}
