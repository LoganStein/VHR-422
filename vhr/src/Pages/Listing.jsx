import React from "react";
import Header from "../Components/Header";
import { useLocation } from "react-router-dom";

function Listing() {
  const location = useLocation();
  const listing = location.state.listing;
  return (
    <div>
      <Header />
      <h1>{listing.title}</h1>
      <span>{listing.desc}</span>
    </div>
  );
}

export default Listing;
