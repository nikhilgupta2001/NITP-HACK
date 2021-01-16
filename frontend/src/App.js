import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
// import SideDrawer from './components/SideDrawer';
import {useState} from 'react';
import Corousel from './components/Corousel';
import RecomVendor from './components/RecomVendor';
import Vendor from './components/Vendor';
import Vendordetail from './components/Vendordetail';
import Food from './components/Food'
import Ordersummary from './components/Ordersummary';
function App() {
  return (

    <div className="App">
    <Router>
    <Navbar />
    <Route exact path="/">
   
    <Corousel />
    <RecomVendor/>
    {/* <SideDrawer show={sideToggle} click={() => setSideToggle(false)} /> */}
    
       {/* Navbar*/}
       {/* {Sidedrawer} */}
       {/* {Backdrop} */}
       {/* Home Screen */}
       {/* Vendor List */}
       {/* Cart and Checkout Screen*/}  
    </Route> 
    {/* <Switch> */}

    <Route exact path="/vendors" component={Vendor} />
    <Route exact path="/vendor/:id" component={Vendordetail} />
    <Route exact path="/foods" component={Food} /> 
     <Route exact path="/ordersummary" component={Ordersummary} />
    
    {/* </Switch> */}
    </Router> 
    
       
    </div>
  );
}

export default App;
