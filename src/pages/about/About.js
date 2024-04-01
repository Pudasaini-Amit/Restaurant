import React from "react";
import Footer from "../../components/footer/Footer";
import "./About.css";
import Grilled_chicken from "./Grilled_chicken.jpg";


function About(){
   return(
      <>
      <div id="about">
         <div id="card_top">
            <div className="right">
               <h1>Our history</h1>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in 	cillum dolore eu fugiat nulla pariatur
               </p>
            </div> 
            <div className="left">
               <img className="img1" src={Grilled_chicken} alt='Image'/>
            </div>
         </div>
         <div id="card_bottom">
            <h1>Why Grill House?</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
               tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
               consequat. Duis aute irure dolor in reprehenderit in 	cillum dolore eu fugiat nulla pariatur</p>
         </div>
      </div>
      <Footer/>
      </>
   )
}

export default About;