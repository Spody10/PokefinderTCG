import React from "react";
import background from "../assets/images/background.png";
import profOak from "../assets/images/prof-oak.png";
import Disclaimer from "../components/Disclaimer/Disclaimer";
import LoginForm from "../components/Login/LoginForm";
//import Header from "../components/Header/index";

const Login = () => {
  return (
    <div>
      <img src={background} style={{ width: "100%" }} alt="background" />
      <div>
        <LoginForm />
      </div>
      <div>
        <div>
          <img src={profOak} alt="profOak" />
        </div>
        <div>
          <Disclaimer />
        </div>
      </div>
    </div>
  );
};

export default Login;
