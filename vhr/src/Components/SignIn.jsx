import React from "react";
import "../CSS/signIn.css";

function SignIn(props) {
  return (
    <div className="signIn__container">
      <span
        className="signIn__exit"
        onClick={() => {
          props.setShowSignIn(false);
        }}
      >
        X
      </span>
      <div className="signIn__header-container">
        <span className="signIn__title">Sign In</span>
        <span className="signIn__subtitle">
          For faster more convient checkout
        </span>
        <span className="textLight">
          {/* Don't have an account? <a>Sign Up</a> */}
        </span>
      </div>
      <div className="signIn__form-container">
        <div className="label-input">
          <label htmlFor="email">Email</label>
          <input name="email" type="text" />
        </div>
        <div className="label-input">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" />
        </div>
        {/* <div className="signIn__remember-pass">
          <div className="signIn__remember-pair">
            <input type="checkbox" name="remember" />
            <label id="remember" forhtml="remeber">
              Remember Me
            </label>
          </div>
          <a>Forgot your password?</a>
        </div> */}
        <button
          onClick={() => {
            props.setShowSignIn(false);
            props.setSignedIn(true);
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default SignIn;
