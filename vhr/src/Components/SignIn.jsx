import React from "react";

function SignIn(props) {
  return (
    <div className="signIn__container">
      <div className="signIn__header-container">
        <span className="signIn__title">Sign In</span>
        <span>For faster more convient checkout</span>
        <span>
          Don't have an account? <a href="#">Sign Up</a>
        </span>
      </div>
      <div className="signIn__form-container">
        <label htmlFor="email">Email</label>
        <input name="email" type="text" />
        <label htmlFor="password">Password</label>
        <input name="password" type="password" />
        <input type="checkbox" name="remember" />
        <a href="#">Forgot your password?</a>
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
