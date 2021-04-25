import React from 'react';
import { NavLink } from 'react-router-dom';
import "../index.css";

const Navbar = () => {
  
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light mt-0">
  <div className="container-fluid">
    <NavLink className="nav navbar-brand" exact to="/">ZERO</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
        <NavLink className="nav" exact activeClassName="active" to="/"> Home </NavLink>
    <NavLink className="nav" exact activeClassName="active" to="/About"> About Us </NavLink>
     <NavLink className="nav" exact activeClassName="active" to="/Service"> Service </NavLink>
     <NavLink className="nav"   exact activeClassName="active" to="/contact"> Contact Us </NavLink>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar;



// { <NavLink exact activeClassName="active" to="/"> Home </NavLink>
//     <NavLink exact activeClassName="active" to="/About"> About Us </NavLink>
//     <NavLink exact activeClassName="active" to="/Service"> Service </NavLink>
//     <NavLink exact activeClassName="active" to="/contact"> Contact Us </NavLink>
//}