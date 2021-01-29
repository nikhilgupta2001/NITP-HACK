import React, { useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'

function SellerProfile() {
  // const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log(e);

    const data = {
      email,
      name, 
      phonenumber,
      imageUrl,
      status
    }
    
    axios.post("/sellerprofile",data) 
    .then( res =>console.log(res))
    .catch(err=> console.log(err));
    
  };
  
  return (


    <div >
      <div className="container-fluid " >
        <div className="row" style={{ height: "750px" }}>
          <div
            className="  mh-100 bg-info text-white font-weight-bold col-lg-4 col-md-4 col-sm-12 col-xs-12  "
          >
            {/* Sections */}
            <div className="row">
              <div className="col-12 pb-4 mt-4 border-bottom border-white">My Profile</div>
              <hr className="text-white" />
              <div className="col-12 pt-4 pb-4 border-bottom border-white "><Link to="/sellItem">Sell Item</Link></div>
              <hr className="text-white" />
              <div className="col-12 pt-4 pb-4 border-bottom border-white">Sold Summary</div>
              <hr className="text-white" />
              <div className="col-12 pt-4 pb-4  border-bottom border-white">My Volunteer</div>
              <hr className="text-white" />
              <div className="col-12 pt-4 pb-4  border-bottom border-white">Head Volunteer</div>
              <hr className="text-white" />
              <div className="col-12 pt-4 pb-4 mb-2 border-bottom border-white">Setting</div>
            </div>
          </div>
          <div className="mh-100 border border-dark lg-shadow col-lg-8 col-md-8 col-sm-12 col-xs-12 ">
            <form enctype="multipart/form-data" onSubmit={handleSubmit}>
              <div class="form-row mr-2 ml-2 mt-4 mb-0">
                <div class="form-group col-md-6">
                  <label for="inputEmail4" >Name</label>
                  <input
                    name="name"
                    type="text"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="name"
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Email</label>
                  <input
                    name="email"
                    type="email"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Enter your mail id"
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="inputAddress">Status</label>
                <input
                  name="status"
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Status"    
                  onChange={e => setStatus(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="inputAddress">Phone number</label>
                <input
                  name="phonenumber"
                  type="number"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Phone Number "
                  onChange={e => setPhonenumber(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="inputAddress2">Upload Image</label>
                <input
                  type="file"
                  class="form-control" 
                  name="file" 
                  id="customFile" 
                onChange={e => setImageUrl(e.target.value)}/>
              </div>
              {/* <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputCity">rating</label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
            </div> */}
              <button type="submit" class="btn btn-primary mt-2">
                Add Dish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}

export default SellerProfile;
