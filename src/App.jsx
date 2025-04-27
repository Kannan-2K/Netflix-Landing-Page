import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Navbar/Hero";
import Details from "./component/Detail/details";
const App = () => {
  return (
    <div className="container">
      <div className="landingContainer">
        <Navbar />
        <Hero />
      </div>
      <Details />
    </div>
  );
};

export default App;
