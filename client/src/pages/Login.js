import React from "react";

const Login = () => {
  return (
    <main>
      <div className='text-box user-form'>
        <div>
        <h1 className='center-text'>Login</h1>
        <form>
          <div>
            <label htmlFor="login-email">Email:</label>
            <br></br>
            <input
              name="login-email"
              type="login-email"
              id="login-email"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <br></br>
            <input
              name="login-password"
              type="login-password"
              id="login-password"
            />
          </div>
          <div className='center-text'>
            <button>Login</button>
          </div>
        </form>

          <div className="break">------------------ OR ------------------</div>

        <h1 className='center-text'>Signup</h1>
        <form>
          <div>
            <label htmlFor="signup-username">Username:</label>
            <br></br>
            <input
              name="signup-username"
              type="signup-username"
              id="signup-username"
            />
          </div>
          <div>
            <label htmlFor="signup-email">Email:</label>
            <br></br>
            <input
              name="signup-email"
              type="signup-email"
              id="signup-email"
            />
          </div>
          <div>
            <label htmlFor="signup-password">Password:</label>
            <br></br>
            <input
              name="signup-password"
              type="signup-password"
              id="signup-password"
            />
          </div>
          <div className='center-text'>
            <button>Submit</button>
          </div>
        </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
