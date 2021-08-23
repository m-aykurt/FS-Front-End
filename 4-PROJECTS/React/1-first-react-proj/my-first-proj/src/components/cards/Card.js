import React  from "react";
import "./Card.css";
import { data } from "../../helper/data";

const Card = () => {
  console.log(data);
  // const [showImage, setShowImage] = useState(false)
  return (
    <div className={"card-group"}>
      {data.map((dataList) => {
        const { id, title, desc, image } = dataList;
        return (
          <div key={id} className={"cards"}>
            <h3 className={"h3"}>{title}</h3>
            <div className={"image"}>
              <img src={image} alt={image} />
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
