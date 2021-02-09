// import React, { useState, useEffect } from 'react'
// import './Register.css'

// function Register() {
//   const [password, setPrice] = useState("");
//   const [name, setName] = useState("");
//   const [email, setemail] = useState("");

//   const handleSubmit = (e) => {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     e.preventDefault();
//     var person = {
//       name,
//       email,
//       password
//     }
//   }

//   return (
//     <div>
      

//       <div id="id01" className="modal">


//       </div>




//       {/* {
//         window.onclick = function (event) {
//           if (event.target == modal) {
//             modal.style.display = "none";
//           }
//         }
//       } */}

//     </div>
//   )
// }


// export default Register;
// export {handleShow};




// <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>register</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             {/* <form onSubmit={handleSubmit} className="modal-content animate" action="/action_page.php" method="post">
//                   <div className="imgcontainer">
//                     <span onclick="document.getElementById('id01').style.display='none'" className="close" title="Close Modal">&times;</span>
//                     <img src="img_avatar2.png" alt="Avatar" className="avatar" />
//                   </div>

//                   <div className="container">
//                     <label for="name"><b>Username</b></label>
//                     <input type="text" placeholder="Enter Username" name="name" required />

//                     <label for="password"><b>Password</b></label>
//                     <input type="password" placeholder="Enter Password" name="psw" required />

//                     <button type="submit">Login</button>
//                     <label>
//                       <input type="checkbox" checked="checked" name="remember" /> Remember me
//             </label>
//                   </div>

//                   <div className="container" style={{ backgroundColor: "#f1f1f1 " }}>
//                     <button type="button" onclick="document.getElementById('id01').style.display='none'" className="cancelbtn">Cancel</button>
//                     <span className="psw">Forgot <a href="#">password?</a></span>
//                   </div>
//                 </form> */}
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//           </Button>
//             <Button variant="primary" onClick={handleClose}>
//               Save Changes
//           </Button>
//           </Modal.Footer>
//         </Modal>