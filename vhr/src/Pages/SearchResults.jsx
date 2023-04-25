import React, { useState } from "react";
import Header from "../Components/Header";
import Search from "../Components/Search";
import map from "../Assets/images/map.png";
import "../CSS/searchResults.css";
import ListingCard from "../Components/ListingCard";
import { listings } from "../Assets/fakeData";
import { useLocation } from "react-router-dom";

function SearchResults() {
  const location = useLocation();
  const info = location.state.info;
  const [filters, setfilters] = useState(
    info.filters.map((filter) => filter.toLowerCase())
  );
  const [houseType, setHouseType] = useState("");
  // console.log(filters);

  // handle checkbox filter changes
  const handleFilterChange = (e) => {
    // console.log(e.target.name == "type");
    const filter = e.target.value;
    if (e.target.checked) {
      setfilters([...filters, filter]);
    } else {
      setfilters(filters.filter((f) => f !== filter));
    }
  };

  const handleHouseChange = (e) => {
    const house = e.target.value;
    setHouseType(house);
  };

  // If search terms aren't provided create an empty array
  let searchTerms = info.searchTerms
    ? info.searchTerms.map((term) => term.toLowerCase())
    : [""];

  console.log(searchTerms);
  let results = listings
    .filter((listing) => {
      // Check if listing tags match any search terms
      const searchMatch = listing.tags.some((tag) =>
        searchTerms.some((term) =>
          tag.toLowerCase().includes(term.toLowerCase())
        )
      );
      // Check if listing tags match every filter applied
      const filterMatch = filters.every((filter) =>
        listing.tags.includes(filter.toLowerCase())
      );
      // check if house type matches
      listing.tags.push("");
      const houseMatch = listing.tags.includes(houseType.toLowerCase());
      // Return true if there is a search match and filter match
      return searchMatch && filterMatch && houseMatch;
    })
    .map((listing) => {
      return <ListingCard info={listing} />;
    });
  if (results.length == 0) {
    results = (
      <center>
        <h1>No Matches Found</h1>
      </center>
    );
  }
  return (
    <>
      <Header />
      <div className="container">
        <div className="dev ad-container">Ad goes here</div>
        <Search />
        <div className="searchResult__map-filter-container">
          <div
            className="searchResult__map"
            style={{ backgroundImage: `url(${map})` }}
          ></div>
          <div className="searchResult__filters">
            <label forhtml="price">Price</label>
            <select name="price">
              <option value={"H2L"}>High to Low</option>
              <option value={"L2H"}>Low to High</option>
            </select>
            <label forhtml="type">House Type</label>
            <select onChange={handleHouseChange} name="type">
              <option value="">--Select house type--</option>
              <option value="Cabin">Cabin</option>
              <option value="Town House">Town House</option>
              <option value="Hotel">Hotel</option>
              <option value="Resort">Resort</option>
            </select>
            <div className="min-max">
              <input type="text" placeholder="min" />
              -
              <input type="text" placeholder="max" />
            </div>
            <span className="filter-pair">
              <input
                name="kids"
                type="checkbox"
                onChange={handleFilterChange}
                value={"kids"}
                checked={filters.includes("kids")}
              />
              <label forhtml="kids">Kids</label>
            </span>
            <span className="filter-pair">
              <input
                name="pool"
                type="checkbox"
                onChange={handleFilterChange}
                value={"pools"}
                checked={filters.includes("pools")}
              />
              <label forhtml="pool">Pool</label>
            </span>
            <span className="filter-pair">
              <input
                name="pets"
                type="checkbox"
                onChange={handleFilterChange}
                value={"pets"}
                checked={filters.includes("pets")}
              />
              <label forhtml="pets">Pets</label>
            </span>
            <span className="filter-pair">
              <input
                name="HotTub"
                type="checkbox"
                onChange={handleFilterChange}
                value={"hot tubs"}
                checked={filters.includes("hot tubs")}
              />
              <label forhtml="HotTub">Hot Tub</label>
            </span>
            <span className="filter-pair">
              <input
                name="kitchen"
                type="checkbox"
                onChange={handleFilterChange}
                value={"kitchen"}
                checked={filters.includes("kitchen")}
              />
              <label forhtml="kitchen">Kitchen</label>
            </span>
            <span className="filter-pair">
              <input
                name="ac"
                type="checkbox"
                onChange={handleFilterChange}
                value={"ac"}
                checked={filters.includes("ac")}
              />
              <label forhtml="ac">A/C</label>
            </span>
            <span className="filter-pair">
              <input
                name="outdoorSpace"
                type="checkbox"
                onChange={handleFilterChange}
                value={"outdoor space"}
                checked={filters.includes("outdoor space")}
              />
              <label forhtml="outdoorSpace">Outdoor Space</label>
            </span>
            <span className="filter-pair">
              <input
                name="oven"
                type="checkbox"
                onChange={handleFilterChange}
                value={"oven"}
                checked={filters.includes("oven")}
              />
              <label forhtml="oven">Oven</label>
            </span>
            <span className="filter-pair">
              <input
                name="stove"
                type="checkbox"
                onChange={handleFilterChange}
                value={"stove"}
                checked={filters.includes("stove")}
              />
              <label forhtml="stove">Stove</label>
            </span>
            <span className="filter-pair">
              <input
                name="washer"
                type="checkbox"
                onChange={handleFilterChange}
                value={"washer"}
                checked={filters.includes("washer")}
              />
              <label forhtml="washer">Washer</label>
            </span>
            <span className="filter-pair">
              <input
                name="smoking"
                type="checkbox"
                onChange={handleFilterChange}
                value={"smoking"}
                checked={filters.includes("smoking")}
              />
              <label forhtml="washer">Smoking Allowed</label>
            </span>
            <label forhtml="Safety-Rating">Safety Rating</label>
            <select name="Safety-Rating">
              <option>Green</option>
              <option>Yellow</option>
              <option>Red</option>
            </select>
          </div>
        </div>
        <div className="searchResult__results-container">{results}</div>
      </div>
    </>
  );
}

export default SearchResults;
