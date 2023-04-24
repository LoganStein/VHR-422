import React from "react";

function Contact(props) {
  return (
    <div className="Contact__container">
      <span
        onClick={() => props.setShowContact(false)}
        className="Contact__exit"
      >
        X
      </span>
      <div className="email-container">
        <span>Email*</span>
        <input placeholder="Email" name="email" required></input>
      </div>
      <textarea rows={30}></textarea>
      <button
        onClick={() => {
          props.setShowContact(false);
        }}
      >
        Send
      </button>
    </div>
  );
}

export default Contact;
