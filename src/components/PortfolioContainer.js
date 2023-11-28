import React from "react";
//import Stock from "./Stock";

function PortfolioContainer({ portfolio, onSellStock}) {
  const handleSellStock = (stockId) => {
    // Call the parent component function to sell the stock
    onSellStock(stockId);
  };

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map((stock) => (
        <div
          key={stock.id}
          className="card"
          onClick={() => handleSellStock(stock.id)}
        >
          <div className="card-body">
            <h5 className="card-title">{stock.name}</h5>
            <p className="card-text">
              {stock.ticker}: {stock.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PortfolioContainer;
