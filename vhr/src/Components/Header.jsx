import React, { useState } from "react";
import "../CSS/header.css";
import SignIn from "./SignIn";
import { useNavigate } from "react-router-dom";

function Header() {
  const [SignedIn, setSignedIn] = useState(false);
  const [ShowSignIn, setShowSignIn] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="header">
      <span
        className="header__logo"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </span>
      {SignedIn ? (
        <span
          onClick={() => {
            setSignedIn(false);
          }}
          className="header__nav-item--signin"
        >
          Sign Out
        </span>
      ) : (
        <span
          onClick={() => {
            setShowSignIn(true);
          }}
          className="header__nav-item--signin"
        >
          Sign In
        </span>
      )}
      {ShowSignIn ? (
        <SignIn setSignedIn={setSignedIn} setShowSignIn={setShowSignIn} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Header;
