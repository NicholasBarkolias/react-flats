import React, { Component } from "react";

import Card from "./card";
import flats from "../data/flats";
import SimpleMap from "./simple_map";

class App extends Component {
  render() {
    return (
      <div>
        <Card />
        <div className='map-container'>
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
