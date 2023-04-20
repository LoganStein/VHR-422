import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

function Attributes(props) {
  const posAttrs = props.posAttr || [];
  const negAttrs = props.negAttr || [];

  const posIcons = posAttrs.map((attr, index) => (
    <div className="attr__pair">
      <FontAwesomeIcon key={index} icon={faCheck} /> {/*Render check mark*/}
      <span>{attr}</span>
    </div>
  ));

  const negIcons = negAttrs.map((attr, index) => (
    <div className="attr__pair">
      <FontAwesomeIcon key={index} icon={faTimes} /> {/*Render x icon*/}
      <span>{attr}</span>
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
