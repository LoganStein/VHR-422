import React, { useState } from "react";
import Header from "../Components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Rating from "../Components/Rating";
import "../CSS/Listing.css";
import Attributes from "../Components/Attributes";
import map from "../Assets/images/map.png";
import Contact from "../Components/Contact";

function Listing() {
  const location = useLocation();
  const listing = location.state.info.info;
  const [ShowContact, setShowContact] = useState(false);
  console.log(listing);
  const longDesc = listing.longDesc;
  const nearby = listing.nearby || [];
  const imgs = listing.imgs || [];
  const navigate = useNavigate();

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
          <div className="near-container">{nearEl}</div>
        </div>
        <div className="Listing__desc-container">
          <span dangerouslySetInnerHTML={{ __html: longDesc }}></span>
          <div>
            <button
              onClick={() => {
                navigate("/Checkout", { state: listing });
              }}
            >
              Book Now!
            </button>
            <button id="contact" onClick={() => setShowContact(true)}>
              Contact Host
            </button>
          </div>
        </div>
      </div>
      {ShowContact ? <Contact setShowContact={setShowContact} /> : <></>}
    </div>
  );
}

export default Listing;
