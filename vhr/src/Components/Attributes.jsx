import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

function Attributes(props) {
  const posAttrs = props.posAttr || [];
  const negAttrs = props.negAttr || [];

  const toTitleCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };

  const posIcons = posAttrs.map((attr, index) => (
    <div className="attr__pair">
      <FontAwesomeIcon key={index} icon={faCheck} /> {/*Render check mark*/}
      <span>{toTitleCase(attr)}</span>
    </div>
  ));

  const negIcons = negAttrs.map((attr, index) => (
    <div className="attr__pair">
      <FontAwesomeIcon key={index} icon={faTimes} /> {/*Render x icon*/}
      <span>{toTitleCase(attr)}</span>
    </div>
  ));

  return (
    <div className="attrs">
      {posIcons}
      {negIcons}
    </div>
  );
}

export default Attributes;
