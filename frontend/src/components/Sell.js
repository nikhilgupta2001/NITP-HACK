import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import {registerUser} from '../redux/actions/authActions'
export default function Sell() {
  const dispatch = useDispatch();
  var person;
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(false)
     person = {
      name,
      email,
      password
    }
    dispatch(registerUser(person));
    // const data=axios.post("/user/register",person) 
    // .then( res =>console.log("Successfully registered"))
    // .catch(err=> console.log(err));
    // console.log(person);
  }
  return (

    <div>
      <nav class="navbar navbar-expand-lg navbar-light text-white bg-dark outline outline-success">
        <a class="text-white navbar-brand" href="#">
          Sell
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class=" font-weight-bold collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active text-white" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
            <Link class="nav-item nav-link text-white" to="/SellerProfile">
              My Profile
            </Link>
            <a class="nav-item nav-link text-white" href="#">
              Pricing
            </a>
            <button  onClick={handleShow}  >
              Register
            </button>


            {/* Register Page Ends */}
          </div>
        </div>
      </nav>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="cardimg1.jpg" alt="First slide" style={{ height: "350px" }} />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="food1.jpg" alt="Second slide " style={{ height: "350px" }} />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="food2.jpg" alt="Third slide" style={{ height: "350px" }} />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <div class="jumbotron">
        <h1 class="display-5 text-center">START SELLING FOOD ONLINE </h1>
        <hr class="my-4" />
        <p class="lead  text-center ">A platform custoized exactly for your business </p>


        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">Start Selling your DISH</a>
        </p>
      </div>
      <div>
        {/* Model Start */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="exampleInputPassword1">Name</label>
                <input 
                name="name"
                type="name"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Name"
                onChange={e => setName(e.target.value)}
                 />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input 
                name="email"
                type="email" 
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={e => setEmail(e.target.value)}
                 />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)} />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleSubmit}>
              Signup
          </Button>
            <Button variant="primary" onClick={handleClose}>
              I will do It later
          </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>

  )
}