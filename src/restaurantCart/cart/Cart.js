import React, { useContext } from "react";
import cart from "./cart_icon.png";
import "./Cart.css";
import { MenuList } from "../data/data";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { Button } from "@mui/joy";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer"



function Cart(){
  const{cartItems, getTotalAmount}=useContext(ShopContext);
      const totalAmount=getTotalAmount();
   return(
        <>
          <div className="cart">
            <div>
              <h1>Your Cart</h1>
            </div>
            <div className="cartItems">
                {MenuList.map((product)=>{
                    if(cartItems[product.id]!==0){
                      return<CartItem data={product}/>
                    }
                })}
            </div>
            {totalAmount>0?(
              
            <div className="checkOut">
                  
                  <p>Subtotal:${totalAmount}</p>
                    
                    <Link to="/menu"><Button sx={{backgroundColor:"#0f0f0e", margin:"20px"}}>Continue Shopping</Button></Link>
                  <Button sx={{backgroundColor:"#0f0f0e"}}>
                      Go to checkout
                  </Button>
            </div>):(
              <h1>Is Empty</h1>
            )} 
          </div>
        <Footer/>
      </>
   );
}

export default Cart;