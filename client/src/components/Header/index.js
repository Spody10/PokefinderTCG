import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <div className="pokeball-container">
          <div className="pokeball-top">
            <div className="pokeball-button"></div>
          </div>
          <h1>Pokéfinder<span>TCG</span></h1>
          <div className="pokeball-bottom"></div>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a>My page</a>
          </li>
          <li>
            <a>Collection</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </nav>
    </header>
    
  );
};

export default Header;