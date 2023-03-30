import React, { useState } from "react";
import {Link} from 'react-router-dom';
// import "./style.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // Perform sign-in logic here
  };

  return (
    <div className="main">
      <div className="background">
        <div className="all">
          <div className="signIn">
            <p>Sign in</p>
          </div>
          <div className="signInDesc">
            <p>Sign in and start managing your candidates</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="inputEmail">
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <label>Email</label>
            </div>
            <div className="inputPass">
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <label>Password</label>
            </div>
            <div className="remember">
              <Link className="link" href="">Forget Password?</Link>
            </div>
            <div className="SignInBtn">
              <button type="submit">Sign in</button>
            </div>
          </form>
          <div className="SignupSection">
            <p>New in VisiTour?</p>
            <Link className="link" href="#">Create an account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;