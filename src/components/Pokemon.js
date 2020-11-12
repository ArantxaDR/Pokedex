import React from "react";

const Pokemon = (props) => {
  return (
    <article>
      <img src={props.poke.url} alt={props.poke.name} />
      <div>{props.poke.name}</div>
      <div>{props.poke.types}</div>
    </article>
  );
};

export default Pokemon;
