import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";


function Navbar(){
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
            <Cart/>
         </div>
         
      </header>
   );
;}
export default Navbar;