import React from "react";
import "./Signup.css";
import Crypto from "../assets/trade.png";
const Signup = () => {
  return (
    <div id="Earn" className="signup">
      <div className="container ">
        {/*left */}
        <div className="left">
          <img src={Crypto} alt=""></img>
        </div>
        {/*right*/}
        <div className="right">
          <h2>Earn passive incomewith crypto.</h2>
          <p>
            Earn up to 12% annual rewards on 30+ digital assets. Simply hold
            your assets in the app to automatically earn rewards at the end of
            each month with no lockups and no limits.
          </p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;