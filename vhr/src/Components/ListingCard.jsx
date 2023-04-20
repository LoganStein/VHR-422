import React from "react";
import Rating from "./Rating";
import Attributes from "./Attributes";
import { useNavigate } from "react-router-dom";

function ListingCard(props) {
  const navigate = useNavigate();
  return (
    <div
      className="listingCard__container"
      onClick={() => {
        navigate("/Listing", { state: { listing: props } });
      }}
    >
      <div
        className="feature__img"
        style={{ backgroundImage: `url(${props.imgUrl})` }}
      ></div>
      <div className="info__container">
        <div className="listing__heading">
          <span className="title">{props.title}</span>
          <Rating rating={props.rating} />
        </div>
        <div className="desc__container">
          <span>{props.desc ? props.desc : "No description available"}</span>
        </div>
        <div className="price__container">${props.price}/Night</div>
        <div className="attributes__container">
          <Attributes posAttr={props.posAttr} negAttr={props.negAttr} />
        </div>
      </div>
    </div>
  );
}

export default ListingCard;
