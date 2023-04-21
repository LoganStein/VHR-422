import React from "react";
import Header from "../Components/Header";
import { useLocation } from "react-router-dom";
import Rating from "../Components/Rating";
import "../CSS/Listing.css";
import Attributes from "../Components/Attributes";
import map from "../Assets/images/map.png";

function Listing() {
  const location = useLocation();
  const listing = location.state.info.info;
  console.log(listing);
  const longDesc = listing.longDesc;
  const nearby = listing.nearby || [];
  const imgs = listing.imgs || [];

  const nearEl = nearby.map((near) => <span>{near}</span>);
  const imgEl = imgs
    .slice(0, 2)
    .map((img) => (
      <div
        className="Listing__img"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    ));

  return (
    <div>
      <Header />
      <div className="Listing__title-rating-container">
        <h1>{listing.title}</h1>
        <Rating rating={listing.rating} />
      </div>
      <div className="Listing__hero-imgs">{imgEl}</div>
      <div className="Listing__info-container">
        <div className="Listing__map-container">
          <div
            className="Listing__map"
            style={{ backgroundImage: `url(${map})` }}
          ></div>
        </div>
        <div className="Listing__attr-container">
          Attributes
          <Attributes posAttr={listing.posAttr} negAttr={listing.negAttr} />
          Nearby
          {nearEl}
        </div>
        <div className="Listing__desc-container">
          <span>{longDesc}</span>
          <button>Book Now</button>
          <button>Contact Host</button>
        </div>
      </div>
    </div>
  );
}

export default Listing;
