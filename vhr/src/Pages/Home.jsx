import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import "../CSS/home.css";
import FilterCard from "../Components/FilterCard";
import ListingCard from "../Components/ListingCard";
import poolImg from "../Assets/images/Home-Feature.png";
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
        <FilterCard title="Cabins" imgUrl={poolImg} />
        <FilterCard title="Pets" imgUrl={poolImg} />
        <FilterCard title="Patio/Deck" imgUrl={poolImg} />
        <FilterCard title="Hot Tubs" imgUrl={poolImg} />
      </div>
      <div className="feature__listings">
        {/* TODO: add more pics  */}
        <ListingCard
          imgUrl={poolImg}
          title="Chicago Beach House"
          rating="5"
          desc="This is a beautiful beach house located on the cost of Llake Michicgan. Located in Evenston, it is perfectly located for easy travel to downtown with the benefit of a quiet community"
          posAttr={["Pools", "Pets", "Kids"]}
          negAttr={["Smoking"]}
          price={95}
        />
        <ListingCard
          title="Tuscan Villa"
          rating="4"
          desc="This is a beautiful beach house located on the cost of Llake Michicgan. Located in Evenston, it is perfectly located for easy travel to downtown with the benefit of a quiet community"
          pos_attr={["Pools", "Pets", "Kids"]}
          neg_attr={["Smoking"]}
          price={95}
        />
        <ListingCard
          title="French Chateau"
          rating="3"
          desc="This is a beautiful beach house located on the cost of Llake Michicgan. Located in Evenston, it is perfectly located for easy travel to downtown with the benefit of a quiet community"
          pos_attr={["Pools", "Pets", "Kids"]}
          neg_attr={["Smoking"]}
          price={95}
        />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
