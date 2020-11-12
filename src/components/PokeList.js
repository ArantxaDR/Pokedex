import React from "react";
import Pokemon from "./Pokemon.js";

class PokeList extends React.Component {
  render() {
    return (
      <div className="mainList">
        <Pokemon />
      </div>
    );
  }
}

export default PokeList;
