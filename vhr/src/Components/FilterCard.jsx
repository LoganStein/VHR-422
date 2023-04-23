import React from "react";
import { useNavigate } from "react-router-dom";

function FilterCard(props) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/Search", { state: { info: { filters: [props.title] } } });
      }}
      className="filterCard__container"
      style={{ backgroundImage: `url(${props.imgUrl})` }}
    >
      <span className="title">{props.title}</span>
    </div>
  );
}

export default FilterCard;
