import React, { useState, createContext } from "react";
import { MenuList } from "../restaurantCart/data/data";
import { Menu } from "@mui/joy";



export const ShopContext=createContext(null);


const getDefaultCart = () =>{
   let cart ={}
   for (let i=1; i<MenuList.length + 1; i++){
      cart[i]=0
   }
   return cart;
}

export const ShopContextProvider=(props)=>{
   
   const[cartItems, setCartItems]=useState(getDefaultCart());


   const getTotalAmount=()=>{
      let totalAmount=0;
      for (const item in cartItems){
         if(cartItems[item]>0){
            let itemInfo=MenuList.find((product)=>product.id===Number(item));
            totalAmount+=cartItems[item]*itemInfo.price;
         }
      }
      
      return totalAmount;
   };

  

   const addToCart = (itemId)=>{
         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));      
   }
   const removeFromCart = (itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));      
   }

   const updateCartItemCount=(newAmmount, itemId)=>{
      setCartItems((prev)=>({...prev, [itemId]:newAmmount}))
   }
   const contextValue={cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalAmount};

   
   return(
            <ShopContext.Provider  value={contextValue}>
               {props.children}
               
            </ShopContext.Provider>
   );
}