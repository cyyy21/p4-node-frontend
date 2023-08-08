import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUser] = useState("");

  //error message;
  const [errEmail, seterrEmail] = useState(false); //email

  //password error
  const [errPass, seterrPass] = useState(false);
  const [lengthPass, setLength] = useState(false);
  const [ErrUser, setErrUser] = useState(false);
  const [lengthUSer, setLengthUser] = useState(false);

  function Register(e) {
    let hasError = false;
    e.preventDefault();
    try {
      //email ************
      if (email === "" && email.length === 0) {
        seterrEmail(true);
        let hasError = true;
      } else {
        seterrEmail(false);
      }

      //password ****************
      if (password.length === 0 && password === "") {
        seterrPass(true);
        let hasError = true;
      } else {
        seterrPass(false);
      }

      if (password.length < 4) {
        setLength(true);
        let hasError = true;
      } else {
        setLength(false);
      }

      //userName **********************
      if (userName.length === 0 && userName === "") {
        setErrUser(true);
        let hasError = true;
      } else {
        setErrUser(false);
      }

      if (userName.length < 4) {
        setLengthUser(true);
        let hasError = true;
      } else {
        setLengthUser(false);
      }
    } catch (error) {
      console.log("error pre");
    }
  }

  return (
    <div>
      <div>
        <header>
          <nav>
            <p id="logo">GALANA</p>
            <ul>
              <li>
                <Link to="/" id="link">
                  Home
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/signup" id="link">
                  Register
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/login" id="link">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <div id="registerBody">
        <div className="register">
          <h1 className="logo">GALANA</h1>
          <h2>Create your Account</h2>
          <form onSubmit={Register}>
            <label for="fname">UserName:</label>
            <br />
            <input
              type="userName"
              id="userName"
              name="userName"
              placeholder="UserName"
              onChange={(e) => setUser(e.target.value)}></input>
            <br />
            <div>
              {ErrUser ? (
                <span className="errorMessage">UserName cannot be blank</span>
              ) : null}
            </div>
            <div>
              {lengthUSer ? (
                <span className="errorMessage">
                  UserName must be 4 or more Character
                </span>
              ) : null}
            </div>
            <br />

            <label for="fname">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}></input>
            <br />
            <div>
              {errEmail ? (
                <span className="errorMessage">Invalid Email</span>
              ) : null}
            </div>
            <br />

            <label for="password">Password:</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}></input>
            <br />
            <div>
              {errPass ? (
                <span className="errorMessage">Invalid Password</span>
              ) : null}
            </div>
            <div>
              {lengthPass ? (
                <span className="errorMessage">
                  Password must be 4 or more character
                </span>
              ) : null}
            </div>
            <br />
            <button className="registerButton">Signup</button>
            <br />
            <div className="line"></div>
            <a href="/login" className="login">
              Already have an account? Login here!
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
