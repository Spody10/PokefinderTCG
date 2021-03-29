import React, { useState } from "react";

import pokeball from "../../assets/images/pokeball.png";

function LoginForm(props) {
  return (
    <div className="login-container">
      <div className="header">Login</div>
      <div className="content">
        <div className="form">
          <div className="form-group">
            <input type="email" name="email" placeholder="Enter Email" />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
            />
          </div>
        </div>
      </div>
      <div className="button">
        <button type="Image" className="btn" src="{pokeball}">
          Login
        </button>
      </div>
      <br></br>
      <div className="break">------------------ OR ------------------</div>
      <br></br>
      <div className="header">Signup</div>
      <div className="content">
        <div className="form">
          <div className="form-group">
            <input type="email" name="email" placeholder="Enter Email" />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Confirm Password"
            />
          </div>
        </div>
      </div>
      <div className="button">
        <button type="image" className="btn">
          Submit
        </button>
      </div>
    </div>
  );
}
export default LoginForm;
