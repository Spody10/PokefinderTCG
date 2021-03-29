import React from "react";
import pokebox from "../assets/images/pokebox.png";
import Header from "../components/Header/index";
import Card from "../components/Card";

function Collection() {
  return;
  <div>
    <Header />
    <div className="title-plaque">
      <h1>Collection</h1>
    </div>
    <div className="pokebox-container">
      <img src={pokebox} style={{ width: "100%" }} alt="pokebox" />
      <div className="pokebox-row">
        <Card />
      </div>
    </div>
  </div>;
}

export default Collection;
