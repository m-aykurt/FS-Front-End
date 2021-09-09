import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h1>
        Clarusway <span>Web Design</span>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>{" "}
        <li>
          <Link to="/services">Serivces</Link>
        </li>
      </ul>
      <h1>Subscribe to out newsletter</h1>
      <input type="text" placeholder="Search " />
      <button>Subscribe</button>
    </nav>
  );
}
