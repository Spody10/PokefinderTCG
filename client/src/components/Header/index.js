import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <header>
      {/* distance between the halves of the pokeball determined by h1 width */}
      <div className="logo-container">
        <div className="pokeball-container">
          <div className="pokeball-top">
            <div className="pokeball-button"></div>
          </div>
          <h1>
            Pokéfinder<span>TCG</span>
          </h1>
          <div className="pokeball-bottom"></div>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/home">My Page</Link>
          </li>
          <li>
            <Link to="/auction">Auction a Card</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
        {/* burger should eventually open up collapsed navigation */}
        <div className="burger-container">
          <button className="burger">nav</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
