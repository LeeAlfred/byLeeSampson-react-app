import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Contact from "./Contact";


function Menu() {

return (
    <div>
<Navbar fixed= "top" bg="light" expand="lg">
<Navbar.Brand href="#home">
  {/* <img
      id="logo"
      alt="Penguin Logo"
      src="./penguinLogo.svg"
      width="30"
      height="30"
      className="d-inline-block align-top"
  />{' '} */}
  Penguins byLeeSampson
</Navbar.Brand> 
 <Navbar.Toggle />
 <Navbar.Collapse className="justify-content-end">
  <Navbar.Text>   
    <Contact />
  </Navbar.Text>
 </Navbar.Collapse>
</Navbar>
    </div>
)


}







export default Menu