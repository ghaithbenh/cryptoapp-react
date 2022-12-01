import React, { useState, useEffect } from "react";
import "./Featured.css";
//import BTC from "../assets/btc-img.png";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import axios from "axios";
const Featured = () => {
  const [data, setData] = useState(null);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  if (!data) return null;
  return (
    <div id="featured" className="featured">
      <div className="container">
        {/* Left */}
        <div className="left">
          <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <button className="btn">See More Coins</button>
        </div>

        {/* Right */}

        <div className="right">
          {data.map((coin) => {
            return (
              <div className="card">
                <div className="top">
                  {/* <img src={BTC} alt='/' /> */}
                  <img src={coin.image} alt="" />
                </div>
                <div>
                  <h5>{coin.name}</h5>
                  <p>${coin.current_price.toLocaleString()}</p>
                </div>

                {coin.price_change_percentage_24h < 0 ? (
                  <span className="red">
                    <FiArrowDown className="icon" />
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </span>
                ) : (
                  <span className="green">
                    <FiArrowUpRight className="icon" />
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Featured;
