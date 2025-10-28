import React from "react";
import logoImage from "../assets/Logo_512_512.png";
export default function Header() {
  return (
    <header className="header">
      <img src={logoImage} className="logo"/>
      <h1>SecondWrap Supply Co.</h1>
      <h3>
        Explore how everyday packaging can have a <strong>second life</strong> -         from reused boxes to eco-friendly bubble wrap.<br/>Sustainable. Affordable. Practical.
      </h3>
    </header>
  );
}
