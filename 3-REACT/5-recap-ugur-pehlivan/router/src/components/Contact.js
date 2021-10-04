import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  // setTimeout(() => {
  //   props.history.push("/about");
  // }, 2000);
  return (
    <div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/card/alex" className="ui header">
          ALEX
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
          reprehenderit!
        </p>
      </div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/card/murat" className="ui header">
          MURAT
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
          reprehenderit!
        </p>
      </div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/card/tasci" className="ui header">
          TASCİ
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
          reprehenderit!
        </p>
      </div>
    </div>
  );
}

export default Contact;
