import React from "react";
import Footer from "../../components/footer/Footer";
import "./Menu.css";
import fruitsalad from "./fruitsalad.avif";
import burger from "./burger.webp";
import coffee from "./coffee.webp";
import pastry from "./pastry.jpg";
import milkshake from "./milkshake.webp";
import icecream from "./icecream.webp";


function Menu(){
   return(
      <>
      <div id="menu">
            <div className="greet">
               <h1>WELCOME</h1>
               <h1>Explore our culinary delights and discover a world of flavors awaiting you</h1><br/><br/>
            </div>
            <div className="dish">
               <div className="card">
                  <img className="img" src={fruitsalad} alt="Image"/>
                  <div className="content">
                     <h2>Fruit Salad</h2>
                     <p>Cillum elit velit sunt do nisi id commodo proident elit.</p>
                     <div style={{fontWeight:"bold"}}>$10</div>
                     <div id="add">+</div>
                  </div>
               </div>
               <div className="card">
                  <img className="img" src={burger} alt="Image"/>
                  <div className="content">
                     <h2>Burger</h2>
                     <p>Cillum elit velit sunt do nisi id commodo proident elit.</p>
                     <div style={{fontWeight:"bold"}}>$12</div>
                     <div id="add">+</div>
                  </div>
               </div>
               <div className="card">
                  <img className="img" src={coffee} alt="Image"/>
                  <div className="content">
                     <h2>Coffee</h2>
                     <p>Cillum elit velit sunt do nisi id commodo proident elit.</p>
                     <div style={{fontWeight:"bold"}}>$7</div>
                     <div id="add">+</div>
                  </div>
               </div>
               <div className="card">
                  <img className="img" src={pastry} alt="Image"/>
                  <div className="content">
                     <h2>Pastry</h2>
                     <p>Cillum elit velit sunt do nisi id commodo proident elit.</p>
                     <div style={{fontWeight:"bold"}}>$14</div>
                     <div id="add">+</div>
                  </div>
               </div>
               <div className="card">
                  <img className="img" src={milkshake} alt="Image"/>
                  <div className="content">
                     <h2>Milkshake</h2>
                     <p>Cillum elit velit sunt do nisi id commodo proident elit.</p>
                     <div style={{fontWeight:"bold"}}>$9</div>
                     <div id="add">+</div>
                  </div>
               </div>
               
               <div className="card">
                  <img className="img" src={icecream} alt="Image"/>
                  <div className="content">
                     <h2>Ice Cream</h2>
                     <p>Cillum elit velit sunt do nisi id commodo proident elit.</p>
                     <div style={{fontWeight:"bold"}}>$6</div>
                     <div id="add">+</div>
                  </div>
               </div>
               <div className="card">
                  <img className="img" src={icecream} alt="Image"/>
                  <div className="content">
                     <h2>Ice Cream</h2>
                     <p>Cillum elit velit sunt do nisi id commodo proident elit.</p>
                     <div style={{fontWeight:"bold"}}>$6</div>
                     <div id="add">+</div>
                  </div>
               </div>
               <div className="card">
                  <img className="img" src={icecream} alt="Image"/>
                  <div className="content">
                     <h2>Ice Cream</h2>
                     <p>Cillum elit velit sunt do nisi id commodo proident elit.</p>
                     <div style={{fontWeight:"bold"}}>$6</div>
                     <div id="add">+</div>
                  </div>
               </div>
               <div className="card">
                  <img className="img" src={icecream} alt="Image"/>
                  <div className="content">
                     <h2>Ice Cream</h2>
                     <p>Cillum elit velit sunt do nisi id commodo proident elit.</p>
                     <div style={{fontWeight:"bold"}}>$6</div>
                     <div id="add">+</div>
                  </div>
               </div>
               

            </div>
         </div>
      <Footer/>
      </>
   ) 
}

export default Menu;