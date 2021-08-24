import React, { useState, useEffect } from "react";
import axios from "axios";

function Card() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => console.log(response) )
      .catch((error) => console.log(error));
  });
  return (
    <div>
      <div className="card w-50 mx-auto mt-5">
        <div className="card-header d-flex justify-content-around">
          <div className="list-group-item">
            <img src="..." className="card-img-top" alt="..." />
          </div>
          <div className="list-group-item">
            <p>Name</p>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <button type="button" className="btn btn-info w-50 mx-auto">
          Info
        </button>
      </div>
    </div>
  );
}

export default Card;
