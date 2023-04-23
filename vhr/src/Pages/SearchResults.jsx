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

  // handle checkbox filter changes
  const handleFilterChange = (e) => {
    const filter = e.target.value;
    if (e.target.checked) {
      setfilters([...filters, filter]);
    } else {
      setfilters(filters.filter((f) => f !== filter));
    }
  };

  // If search terms aren't provided create an empty array
  let searchTerms = info.searchTerms
    ? info.searchTerms.map((term) => term.toLowerCase())
    : [];

  // TODO: Fix filter check (currently displays pools OR kids but we want pools and kids)
  const results = listings
    .filter((listing) => {
      // Check if listing tags match any search terms
      const searchMatch = listing.tags.some((tag) =>
        searchTerms.some((term) =>
          tag.toLowerCase().includes(term.toLowerCase())
        )
      );
      // Check if listing tags match any filters
      const filterMatch = filters.some((filter) =>
        listing.tags.includes(filter.toLowerCase())
      );
      // Return true if there is a search match or filter match
      return searchMatch || filterMatch;
    })
    .map((listing) => {
      return <ListingCard info={listing} />;
    });
  return (
    <>
      <Header />
      <div className="container">
        <div className="dev ad-container"></div>
        <Search />
        <div className="searchResult__map-filter-container">
          <div
            className="searchResult__map"
            style={{ backgroundImage: `url(${map})` }}
          ></div>
          <div className="dev searchResult__filters">
            <input
              name="kids"
              type="checkbox"
              onChange={handleFilterChange}
              value={"kids"}
            />
            <label forhtml="kids">Kids</label>
          </div>
        </div>
        <div className="searchResult__results-container">{results}</div>
      </div>
    </>
  );
}

export default SearchResults;
