import React, { useEffect, useState } from "react";
import man from "../../assets/man.svg";
import woman from "../../assets/woman.svg";
import mail from "../../assets/mail.svg";
import growMan from "../../assets/growing-up-man.svg";
import growWoman from "../../assets/growing-up-woman.svg";
import map from "../../assets/map.svg";
import phone from "../../assets/phone.svg";
import lock from "../../assets/padlock.svg";
// import design from "../../assets/design.svg";
import axios from "axios";
import style from "./Card.module.css";
import Item from "./Item";


function Card() {
  const [cards, setCards] = useState([]);
  const [show, setShow] = useState(false);

  console.log(cards);

  useEffect(() => {
    myApi();
  }, []);

  const myApi = async () => {
    let resultApi = await getMyApi();
    setCards(resultApi.results);
  };

  const getMyApi = async () => {
    let responseResults = {};
    await axios
      .get("https://randomuser.me/api/")
      .then((response) => (responseResults = response.data))
      .catch((err) => console.log(err));
    return responseResults;
  };

  // toggle

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className={style.container}>
        <div className="headerContainer">
          <div className="picture">
            <img src={cards?.picture?.large} alt="img" />
          </div>
        </div>
        <div className="showInfo">
            {cards.map((card)=>{
                <Item prop={card} />
            })}
            
        </div>
        <div className="iconList">
          <div className={style.icons}>
            <div>
              {cards?.gender === "male" ? (
                <img className={style.icon} src={man} alt="man" />
              ) : (
                <img className={style.icon} src={woman} alt="woman" />
              )}
            </div>

            <div onClick={() => setShow(!show)}>
              
              <img className={style.icon} src={mail} alt="mail" />
            </div>
            {cards?.gender === "male" ? (
              <img className={style.icon} src={growMan} alt="man" />
            ) : (
              <img className={style.icon} src={growWoman} alt="woman" />
            )}
            <img className={style.icon} src={map} alt="mail" />
            <img className={style.icon} src={phone} alt="mail" />
            <img className={style.icon} src={lock} alt="mail" />
          </div>
        </div>
        <div className="userArea">
          <div className="changeUser"></div>
          <div className="addUser"></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
