import React from "react";
import Pokemon from "./Pokemon.js";

class PokeList extends React.Component {
  render() {
    const items = this.props.Pokemon.map((poke, id) => {
      return (
        <li key={id}>
          <Pokemon poke={poke} />
        </li>
      );
    });

    return <ul className="mainList">{items}</ul>;
  }
}

export default PokeList;
