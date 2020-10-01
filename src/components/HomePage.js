import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Pluralsight Administration</h1>
      <p>React, Flux, and React Router for web apps</p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

//the following is so that other files can use this component
//default keyword allows for easier importing. Could just say export HomePage also
export default HomePage;
