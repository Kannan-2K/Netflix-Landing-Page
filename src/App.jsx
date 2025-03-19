import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Navbar/Hero";
const App = () => {
  return (
    <div className="container">
      <div className="opacity">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default App;
