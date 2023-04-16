import React from "react";

function Search() {
  return (
    <div className="search__container">
      <input className="search__search-box" placeholder="Search"></input>
      <label className="search__date-label" for="date">
        Check in:
      </label>
      <input
        className="search__date-picker"
        type="date"
        id="date"
        name="date"
      ></input>
      <label className="search__date-label" for="date">
        Check out:
      </label>
      <input
        className="search__date-picker"
        type="date"
        id="date"
        name="date"
      ></input>
      <input placeholder="Guests"></input>
      <button className="search__btn">Search</button>
    </div>
  );
}

export default Search;
