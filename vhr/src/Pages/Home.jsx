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

function Home() {
  return (
    <div>
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
        {/* TODO: add more pics  */}
        <ListingCard
          imgUrl={poolImg}
          title="Chicago Beach House"
          rating="5"
          desc="This is a beautiful beach house located on the cost of Lake Michigan. Located in Evanston, it is perfectly located for easy travel to downtown with the benefit of a quiet community"
          posAttr={["Pools", "Pets", "Kids"]}
          negAttr={["Smoking"]}
          price={95}
        />
        <ListingCard
          imgUrl={poolImg}
          title="Tuscan Villa"
          rating="4"
          desc="This is a beautiful beach house located on the cost of Lake Michigan. Located in Evanston, it is perfectly located for easy travel to downtown with the benefit of a quiet community"
          posAttr={["Pools", "Pets", "Kids"]}
          negAttr={["Smoking"]}
          price={200}
        />
        <ListingCard
          imgUrl={poolImg}
          title="French Chateau"
          rating="3"
          desc="This is a beautiful beach house located on the cost of Lake Michigan. Located in Evanston, it is perfectly located for easy travel to downtown with the benefit of a quiet community"
          posAttr={["Pools", "Pets", "Kids"]}
          negAttr={["Smoking"]}
          price={150}
        />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
