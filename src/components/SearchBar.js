import React, { useState } from "react";

function SearchBar({ onSortStocks, onFilterStocks }) {
  const [sortCriteria, setSortCriteria] = useState(null);
  const [filterCriteria, setFilterCriteria] = useState(null);

  const handleSortChange = (e) => {
    const criteria = e.target.value;
    setSortCriteria(criteria);
    onSortStocks(criteria);
  };

  const handleFilterChange = (e) => {
    const criteria = e.target.value;
    setFilterCriteria(criteria);
    onFilterStocks(criteria);
  };

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="ticker"
          name="sort"
          checked={sortCriteria === "ticker"}
          onChange={handleSortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="price"
          name="sort"
          checked={sortCriteria === "price"}
          onChange={handleSortChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange} value={filterCriteria}>
          <option value="">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
