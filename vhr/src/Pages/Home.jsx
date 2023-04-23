import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import "../CSS/home.css";
import FilterCard from "../Components/FilterCard";
import ListingCard from "../Components/ListingCard";
import poolImg from "../Assets/images/Pool-Filter.png";
import cabinImg from "../Assets/images/Cabin-Filter.png";
import petImg from "../Assets/images/Pets-Filter.jpg";
import patioImg from "../Assets/images/Patio-Filter.jpg";
import hotTubImg from "../Assets/images/HotTub-Filter.jpg";
import Footer from "../Components/Footer";
import { listings } from "../Assets/fakeData"; // acts like our database

function Home() {
  const getListingById = (id) => {
    return listings.find((listing) => listing.id === id);
  };
  return (
    <div className="home__container">
      <Header />
      <Hero />
      <div className="feature__filters">
        <span className="feature__filter-main">
          <FilterCard title="Pools" imgUrl={poolImg} />
        </span>
        <FilterCard title="Cabins" imgUrl={cabinImg} />
        <FilterCard title="Pets" imgUrl={petImg} />
        <FilterCard title="Patio/Deck" imgUrl={patioImg} />
        <FilterCard title="Hot Tubs" imgUrl={hotTubImg} />
      </div>
      <div className="feature__listings">
        <ListingCard info={getListingById(1)} />
        <ListingCard imgUrl={poolImg} info={getListingById(2)} />
        <ListingCard imgUrl={poolImg} info={getListingById(3)} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
