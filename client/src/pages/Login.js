import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import { LOGIN_USER } from '../utils/mutations';
import profOak from "../assets/images/prof-oak.png";
import arrow from "../assets/images/text-box-arrow.png";
import { motion } from "framer-motion"

import Auth from '../utils/auth';

const Login = () => {
  const [signupFormState, setSignupFormState] = useState({ signupUsername: '', signupEmail: '', signupPassword: '' });
  const [addUser, { error }] = useMutation(ADD_USER);
  const handleSignupChange = event => {
    const { name, value } = event.target;

    setSignupFormState({
      ...signupFormState,
      [name]: value
    });
  };
  const handleSignupFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...signupFormState }
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const [loginFormState, setLoginFormState] = useState({ loginEmail: '', loginPassword: '' });
  const [login, { erro }] = useMutation(LOGIN_USER);
  const handleLoginChange = event => {
    const { name, value } = event.target;

    setLoginFormState({
      ...loginFormState,
      [name]: value
    });
  };
  const handleLoginFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...loginFormState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setLoginFormState({
      email: '',
      password: ''
    });
  };

  return (
      <motion.main initial={{ opacity: 0 }}
      transition={{ duration: .5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
      {!Auth.loggedIn() ? (
        <div className='text-box user-form'>
        <div>

          <h1 className='center-text'>Login</h1>
          <form onSubmit={handleLoginFormSubmit}>
            <div>
              <label htmlFor="login-email">Email:</label>
              <br></br>
              <input onChange={handleLoginChange}
                name="loginEmail"
                type="email"
                id="login-email"
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <br></br>
              <input onChange={handleLoginChange}
                name="loginPassword"
                type="password"
                id="login-password"
              />
            </div>
            <div className='center-text'>
              <button>Login</button>
            </div>
          </form>

          <div className="break">------------------ OR ------------------</div>

          <h1 className='center-text'>Signup</h1>
          <form onSubmit={handleSignupFormSubmit}>
            <div>
              <label htmlFor="signup-username">Username:</label>
              <br></br>
              <input onChange={handleSignupChange}
                name="signupUsername"
                type="username"
                id="signup-username"
              />
            </div>
            <div>
              <label htmlFor="signup-email">Email:</label>
              <br></br>
              <input onChange={handleSignupChange}
                name="signupEmail"
                type="email"
                id="signup-email"
              />
            </div>
            <div>
              <label htmlFor="signup-password">Password:</label>
              <br></br>
              <input onChange={handleSignupChange}
                name="signupPassword"
                type="password"
                id="signup-password"
              />
            </div>
            <div className='center-text'>
              <button>Submit</button>
            </div>
          </form>

        </div>
      </div>): null}
      

      {/* oak start */}
      <div className="oak-container">
        <div className="image-container">
          <img src={profOak} alt='Professor Oak'></img>
          <div className='spotlight'></div>
        </div>
        <div className='text-box dialogue'>
          Welcome to the world of PokéfinderTCG!
          <img src={arrow} alt="clickable arrow to proceed dialogue"></img>
        </div>
      </div>
      </motion.main>
  );
};

export default Login;
