import React from "react";
import "./Home.css";
import Footer from "../../components/footer/Footer";

function Home(){
   return(

      <> 
         <div id="home">
            <div className="homecontent">
               <h1>WELCOME</h1>
               <h1>TO GRILL HOUSE RESTAURANT</h1><br/><br/>
                  <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br/>
                  sed do eiusmod tempor incididunt ut labore et dolore magna <br/>
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br/>
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. </h4>
            </div>
         </div>
         <Footer/>
      </>
   )
}

export default Home;