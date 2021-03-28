import React from "react";
import Disclaimer from "../components/Login/Disclaimer";
import LoginForm from "../components/Login/LoginForm";
import background from "../assets/images/background.png";

const Login = () => {
  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <LoginForm />
      </div>
      <div>
        <div></div>
        <div>
          <Disclaimer />
        </div>
      </div>
    </div>
  );
};

export default Login;
