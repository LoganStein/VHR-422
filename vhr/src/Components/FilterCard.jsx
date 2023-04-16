import React from "react";

function FilterCard(props) {
  return (
    <div
      className="filterCard__container"
      style={{ backgroundImage: `url(${props.imgUrl})` }}
    >
      <span className="title">{props.title}</span>
    </div>
  );
}

export default FilterCard;
