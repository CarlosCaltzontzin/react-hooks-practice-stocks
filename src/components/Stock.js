import React from "react";

function Stock({ stock, onBuyStock }) {
  const handleBuyClick = () => {
    // Call the parent component function to buy the stock
    onBuyStock(stock);
  };

  return (
    <div>
      <div className="card" onClick={handleBuyClick} >
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
