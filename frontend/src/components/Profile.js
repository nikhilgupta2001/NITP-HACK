import React,{Component} from 'react';
import './Profile.css';

class Profile extends Component {
    render(){
        return(
            <div class="back">
                <div class="cheaders">My Profile</div>
                <br/>
                <div class="r">
                    <div class="navi">
                        <ul class="list-group list-group-flush lisst">
                            <li class="list-group-item"><a href='/profile'>Sell Item</a></li>
                            <li class="list-group-item"><a href='/purchaseInfo'>Purchase Info</a></li>
                            <li class="list-group-item">My Cart</li>
                            <li class="list-group-item"><a href='/soldSummary'>Sold Summary</a></li>
                            <li class="list-group-item">Volenteer Info</li>
                            <li class="list-group-item">Hired info</li>
                            <li class="list-group-item">Settings</li>
                        </ul>
                    </div>
                    <div class="jumbotron container my-5">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Username</label>
                                <input type="email" class="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"></input>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Email Address</label>
                                <input type="password" class="form-control" name="email" id="exampleInputPassword1" placeholder="Enter email"></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" name="password" id="exampleInputPassword1" placeholder="Enter password"></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}
export default Profile;