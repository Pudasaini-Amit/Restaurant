import React from "react";
import Footer from "../../components/footer/Footer";
import "./Services.css";
import dineIn from "./dine_in.jpg";
import delivery from "./delivery.webp";
import { Link } from "react-router-dom";


function Services(){
   return(
      <>
      <div id="services">
       
            <div className="greet">
               <h1>"Discover convenience and excellence with our services: Order online, book a table, or cater your event. We're here to make every dining experience memorable!"</h1>
            </div>
            <div className="ourServices">
               
               <div className="card">
                  <img className="img" src={dineIn}  alt="Image"/>
                  <div className="content">
                     <h2>Dine In</h2>
                     <p>Cillum elit velit sunt do nisi id commodo proident elit.</p>
                     
                  </div>
               </div>
               <Link to="/menu">
                  <div className="card">
                     <img className="img" src={delivery} alt="Image"/>
                     <div className="content">
                        <h2>Home Delivery</h2>
                        <p>Cillum elit velit sunt do nisi id commodo proident elit.</p>
                        
                     </div>
                  </div>
               </Link>
             </div>
            <div id="bottom">
               <p style={{padding:"7.5%"}}>Thank you for choosing us! Your support means the world. We hope you enjoyed our services and look forward to serving you again soon! Our team is dedicated to crafting dishes with the freshest ingredients and utmost care, ensuring every bite is a delight. Your satisfaction is our top priority, and we hope your order exceeded your expectations.</p>
            </div>
      </div>
      <Footer/>
      </>
   )
}

export default Services;