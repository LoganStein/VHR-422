import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [Search, setSearch] = useState("");
  return (
    <div className="search__container">
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="search__search-box"
        placeholder="Search"
      ></input>
      <div className="search__date-container">
        <label className="search__date-label" forhtml="date">
          Check in:
        </label>
        <input
          className="search__date-picker"
          type="date"
          id="checkIn"
          name="date"
          min={new Date().toISOString().split("T")[0]}
        ></input>
      </div>
      <div className="search__date-container">
        <label className="search__date-label" forhtml="date">
          Check out:
        </label>
        <input
          className="search__date-picker"
          type="date"
          id="checkOut"
          name="date"
          min={new Date().toISOString().split("T")[0]}
        ></input>
      </div>
      <input className="search__guest-box" placeholder="Guests"></input>
      <button
        onClick={() => {
          navigate("/Search", {
            state: { info: { filters: [], searchTerms: Search.split(" ") } },
          });
        }}
        className="search__btn"
      >
        Search
      </button>
    </div>
  );
}

export default Search;
