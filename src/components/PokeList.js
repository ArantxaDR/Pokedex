import React from "react";
import Pokemon from "./Pokemon.js";

class PokeList extends React.Component {
  render() {
    const items = this.props.Pokemon.map((poke) => {
      console.log(poke.name);
      return <Pokemon name={poke.name} />;
    });

    return <div className="mainList">{items}</div>;
  }
}

export default PokeList;
