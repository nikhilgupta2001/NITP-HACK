import React,{Component, useState, useEffect} from 'react';
import Footer from './Footer';
import Header from './Header';

function Signup(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
//     const submitHandler = (e) => {
//         e.preventDefault();
//         const user = {
//             name,
//             email,
//             password
//         };

//         // send data to server
//         axios.post('http://localhost:4000/register', user)
//             .then((res) => {

// ////////////->>>>>>>>>       Logging userdata only for testing purposes    <<<<<<<<<-////////////////         
//                 console.log(res.data);
// ////////////->>>>>>>>>       Logging userdata only for testing purposes    <<<<<<<<<-////////////////  

//             }).catch((error) => {
//                 console.log(error);
//             });

//         // clear the form data after submit
//         setName('');
//         setEmail('');
//         setPassword('');
//     }

        return(
            <div>
            <Header/>
            <br/>
            <br/>
            <div class="container col-md-4 offset-4 loginform">
                <form >
                    <div class="mheaders">Signup</div>
                    <br/>
                    <div class="form-group">
                        <label  for="name">Username</label>
                        <input type="text" name="name" class="form-control " 
                            placeholder="Username" 
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div class="form-group">
                        <label  for="username">Email</label>
                        <input type="text" name="email" class="form-control " 
                            placeholder="Email" 
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div class="form-group">
                        <label  for="username">Password</label>
                        <input type="password" name="password" class="form-control " 
                            placeholder="Password" 
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button class="btn btn-success" type="submit">Signup</button>
                </form>
                
                
            </div>
            <Footer/>
            </div>
        )
    
}



export default Signup;