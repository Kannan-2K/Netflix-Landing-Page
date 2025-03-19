import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div>
      <h1 className="text">Unlimited movies,Tv show and more</h1>
      <h5 className="sub-heading">Watch anywhere.cancel anytime</h5>
      <h5 className="sub-heading1">Ready to watch ? Enter your Email to create or restart your membership</h5>
     
      <div className="button1">
      <input type="email" placeholder="Email address" className="email"/>
      </div>
      <button className="button2">Get Started &gt;</button>
    </div>
  );
};

export default Hero;
