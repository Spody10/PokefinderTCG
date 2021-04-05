import React from "react";
import { Link } from "react-router-dom";

import "./header.css";
import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  
  return (
    <header>
      {/* distance between the halves of the pokeball determined by h1 width */}
      <div className="logo-container">
        {/* login check to decide whether to play animation so login/signup redirect doesnt have it replay */}
        {Auth.loggedIn() ? (
        <div className="pokeball-container">
        <div className="pokeball-top">
          <div className="pokeball-button"></div>
        </div>
        <h1>
          Pokéfinder<span>TCG</span>
        </h1>
        <div className="pokeball-bottom"></div>
      </div>): <div className="pokeball-container rotate-animate">
        <div className="pokeball-top">
          <div className="pokeball-button"></div>
        </div>
        <h1 className='grow-animate'>
          Pokéfinder<span className='TCG-animate'>TCG</span>
        </h1>
        <div className="pokeball-bottom"></div>
      </div>}
        
      </div>

      {Auth.loggedIn() ? (
      <nav>
        <ul>
          <li>
            <Link to="/home/1">My Page</Link>
          </li>
          <li>
            <Link to="/auction">Auction</Link>
          </li>
          <li>
            <a href="/" onClick={logout}>Logout</a>
          </li>
        </ul>
        {/* burger should eventually open up collapsed navigation */}
        <div className="burger-container">
          <button className="burger">nav</button>
        </div>
      </nav> ) : null }
    </header>
  );
};

export default Header;
