import React, { useState } from "react";
import "./App.css";
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";
import "./styles.css";

export default function Login() {
  const [type, setType] = useState("signIn");
  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="App">
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button
                className="ghost px-4 py-2 text-sm border-2 border-white text-white font-semibold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost px-4 py-2 text-sm border-2 border-white text-white font-semibold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
