import React from "react";

const Pokemon = (props) => {
  return (
    <article>
      <img src={props.poke.url} alt={props.poke.name} />
      <div>
        <h2>{props.poke.name}</h2>
      </div>
      <div>
        <h3>{props.poke.types}</h3>
      </div>
    </article>
  );
};

export default Pokemon;
