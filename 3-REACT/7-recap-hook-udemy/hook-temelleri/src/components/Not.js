import React from "react";
import "../App.css";

export default function Not({ ad, aciklama, tarih = "2 nisan" }) {
  return (
    <div className="not">
      <h3>{ad}</h3>
      <p>{aciklama}</p>
      <hr />
      <p>{tarih}</p>
    </div>
  );
}
