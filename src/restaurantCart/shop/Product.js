import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product=(props)=>{
   const { id, name, description, image, price}=props.data;

   const {addToCart, cartItems}=useContext(ShopContext);

   const cartItemAmmount=cartItems[id];
return  (

         <div className="product">  
            <img src={image}/>
            <div className="description">
               <p>{name}</p>
               <p>{description}</p>
               <p>${price}</p>
               <button className="myButton" onClick={()=>addToCart(id)}>
                  
                  Add To Cart {cartItemAmmount>0 && <>({cartItemAmmount})</>}
                  
                  </button>
            </div>
         </div>


)
}