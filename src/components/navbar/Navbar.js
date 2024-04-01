import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react';
import { useState } from "react";

import cart from "../../restaurantCart/cart/cart_icon.png";

// import Cart from "../cart/Cart";

 
function Navbar(){

   const[hamburgerOpen, setHamburgerOpen]=useState(false);

   const handleDrawerToogle=() => {
      setHamburgerOpen(!hamburgerOpen);
   }

   return(
      <header>
         <div id="navbar">
            <div id='logo'>
                 <Link to="/"> <img className="logo" src={logo} alt='logo'/> </Link>
               
            </div>
            <ul className="navlinks">
               <li ><Link to="/">Home</Link></li>
               <li ><Link to="/services">Services</Link></li>
               <li ><Link to="/menu">Menu</Link></li>
               <li ><Link to="/about">About</Link></li>
               <li ><Link to="/contact">Contact</Link></li>
            </ul>
                  
            <Link to="/cart"><img src={cart} style={{width:'3rem', cursor:'pointer'}}/></Link>
            <div className="hamburger">
                <Hamburger duration={0.5} />
            </div>
         </div>
         
      </header>
   );
;}
export default Navbar;