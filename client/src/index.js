import React, { useState } from "react";
import ReactDOM from "react-dom";
import MapComponent from "./map_component";

const Index = () => {
  return (
    <div>
      <div className="header">
        <h1>Welcome to the example task!</h1>
      </div>
      <MapComponent />
    </div>);
};

ReactDOM.render(<Index />, document.getElementById("index"));
