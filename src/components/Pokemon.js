import React from "react";

const Pokemon = (props) => {
  return (
    <article clasName="cards">
      <img src={props.poke.url} alt={props.poke.name} />
      <div>
        <h2 className="name">{props.poke.name}</h2>
      </div>
      <div>
        <h3 className="type">{props.poke.types}</h3>
      </div>
    </article>
  );
};

export default Pokemon;
