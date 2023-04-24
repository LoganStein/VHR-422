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
      <div>
        Email*
        <input></input>
      </div>
      <textarea rows={10} cols={80}></textarea>
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
