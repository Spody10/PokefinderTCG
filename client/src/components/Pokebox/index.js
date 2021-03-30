import React from "react";

import "./pokebox.css";

const Header = () => {
    return (
      <section className="box-container">

        <div className='box-label-container'>
          <div id='left-triangle'></div>
          <div className='box-label'></div>
          <div id='right-triangle'></div>
        </div>

        <div className='pokebox'>
          
        </div>
      </section>
    );
  };
  
  export default Header;