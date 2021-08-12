import React from 'react';
import "./Card.css"
import { data } from '../../helper/data';




const Cards = () => {
   console.log(data)
   return (
      <div className={"card-group"}>
          {data.map((dataList)=>{
          const {id,title,desc,image} = dataList;
             return (
                <div key = {id} className={"cards"}>
                  <h3 className={"h3"}>{title}</h3>
                  <div className={"image"}>
                     <img src={image} alt="img"/>
                     <p>{desc}</p>
                  </div>
                </div>
             )
          })}
      </div>     
     );    
};
export default Cards;