import React from "react";
import { data } from "../../helper/data";
import "./Card-in-class.css";

const Card = (props) => {
    // const [showImage, setShowImage] = useState(false)

  return (
    <div className="card-container">
        {data.map((card)=>{
            return (
                <div onClick={props.onMouseClick} className="cards" key={card.id}>
                    <div className="title">
                        <h2>{card.title}</h2>
                    </div>    
                    <img src={card.image} alt="img" />
                    <div className={props.isVisible ?"card-over" : "no-card-over" }>
                        <p>{card.desc}</p>
                    </div>
                </div>

            )
        })}
    </div>
  );
};

export default Card;
