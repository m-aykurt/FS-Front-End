import React from "react";
import categories from "../helpers/data";
import Item from "./Item"
import "./Card.css"

const Card = ()=>{
  return (
    <div className="cards-container">
      <h5 className="cards-title">Languages</h5>
      <div className="card-container">
        {categories.map((lang,index)=>{
          return ( 
            <Item card={lang} key={index} />
          )
        })}
      </div>
    </div>
  )
}

export default Card;