import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortCriteria, setSortCriteria] = useState(null);
  const [filterCriteria, setFilterCriteria] = useState(null);

  useEffect(() => {
    // Fetch data from your API
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((data) => setStocks(data))
  }, []);

  const buyStock = (selectedStock) => {
    // Add the selected stock to the portfolio
    setPortfolio((prevPortfolio) => [...prevPortfolio, selectedStock]);
  };

  const sellStock = (stockId) => {
    // Remove the selected stock from the portfolio
    setPortfolio((prevPortfolio) => prevPortfolio.filter((stock) => stock.id !== stockId));
  };

  const sortStocks = (criteria) => {
    // Update the sorting criteria
    setSortCriteria(criteria);
  };

  const filterStocks = (criteria) => {
    // Update the filtering criteria
    setFilterCriteria(criteria);
  };

  const filteredStocks = stocks.filter((stock) => {
    if (!filterCriteria || stock.type === filterCriteria) {
      return true;
    }
    return false;
  });

  const sortedAndFilteredStocks = [...filteredStocks].sort((a, b) => {
    if (sortCriteria === "ticker") {
      return a.ticker.localeCompare(b.ticker);
    } else if (sortCriteria === "price") {
      return a.price - b.price;
    }
    return 0; // Default case
  });

  return (
    <div>
      <SearchBar onSortStocks={sortStocks} onFilterStocks={filterStocks}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={sortedAndFilteredStocks} onBuyStock={buyStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onSellStock={sellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
