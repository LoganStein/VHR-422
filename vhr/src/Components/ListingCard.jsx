import React from "react";
import Rating from "./Rating";
import Attributes from "./Attributes";
import { useNavigate } from "react-router-dom";

function ListingCard(props) {
  const navigate = useNavigate();
  const info = props.info;
  return (
    <div
      className="listingCard__container"
      onClick={() => {
        navigate("/Listing", { state: { info: props } });
      }}
    >
      <div
        className="feature__img"
        style={{ backgroundImage: `url(${info.imgUrl})` }}
      ></div>
      <div className="info__container">
        <div className="listing__heading">
          <span className="title">{info.title}</span>
          <Rating rating={info.rating} />
        </div>
        <div className="desc__container">
          <span>{info.desc ? info.desc : "No description available"}</span>
        </div>
        <div className="price__container">${info.price}/Night</div>
        <div className="attributes__container">
          <Attributes
            posAttr={info.posAttr.slice(0, 4)}
            negAttr={info.negAttr.slice(0, 1)}
          />
        </div>
      </div>
    </div>
  );
}

export default ListingCard;
