import React from "react";
import cart from "./cart_icon.png";
import "./Cart.css";


function Cart(){
   return(
     <div id="cart">
      <img src={cart} alt="Cart"/>
     </div>
   )
}

export default Cart;