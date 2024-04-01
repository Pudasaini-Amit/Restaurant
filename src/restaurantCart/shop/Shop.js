import React from "react";
import { MenuList } from "../data/data";
import { Product } from "./Product";
import "./Shop.css";

export const Shop =()=>{

return(
      <div className="shop">
      
         <div className="products">{
            MenuList.map((product)=><Product data={product}/>)

         }
         
         </div>
      </div>
);

}