import React from "react";
import Card from "./Card";

const CardMain=({ prod})=> {
  
  return (
    <div className="mainCard">
      {/* <button id="button">exit</button> */}
      {prod.map((produc) => (
        
        <Card product={produc}/>
        
      ))}
      
   
    </div>
  );
}
export default CardMain;
