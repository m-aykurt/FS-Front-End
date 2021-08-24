import React, { useState, useEffect } from "react";
import axios from "axios";
import email from "../../assets/email.svg";
import location from "../../assets/location.svg";
import phone from "../../assets/phone.svg";
// import style from "./Card.module.css"
import "./Card.css"

function Card() {
  const [cards, setCards] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => setCards(response.data.results[0]));
  }, [refresh]);

  // useEffect(() => {
  //   async function myApi() {
  //     let response = await axios.get("https://randomuser.me/api/");
  //     // response = await response.json();
  //     setCards(response.data.results[0]);
  //   }

  //   setTimeout(() => {
  //     myApi();
  //   }, 1000);
  // }, [refresh]);

  const setRef = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="card w-50 mx-auto mt-5 mb-5 blue">
      {console.log(cards)}
      <div className="card-header d-flex justify-content-around blue">
        <div className="">
          <img src={cards?.picture?.large} className="card-img-top" alt="1" />
        </div>
        <div className="mt-5">
          <p>
            {cards?.name?.title +
              " " +
              cards?.name?.first +
              " " +
              cards?.name?.last}
          </p>
        </div>
      </div>
      <ul className="list-group list-group-flush blue">
        <li className="list-group-item d-flex justify-content-around">
          <p className="w-25">
            <img className="w-50" src={email} alt="email" />
          </p>
          <p className="mt-4">{cards?.email}</p>
        </li>

        <li className="list-group-item d-flex justify-content-around">
          <p className="w-25">
            <img className="w-50" src={phone} alt="phone" />
          </p>
          <p className="mt-4">{cards?.cell}</p>
        </li>

        <li className="list-group-item d-flex justify-content-around">
          <p className="w-25">
            <img className="w-50" src={location} alt="location" />
          </p>
          <p className="mt-4">{cards?.location?.country}</p>
        </li>
      </ul>

      <p>
        Age: {cards?.registered?.age}
      </p>

      <p>
              Register Date : {cards?.registered?.date}
      </p>

      <button
        onClick={setRef}
        type="button"
        className="btn btn-info w-50 mx-auto"
      >
        Change
      </button>
    </div>
  );
}

export default Card;
