import React from "react";

const Pokemon = (props) => {
  console.log(props.poke.types);
  const pokeType = props.poke.types.map((type, index) => {
    return <li key={index}>{type}</li>;
  });
  return (
    <article className="cards">
      <img src={props.poke.url} alt={props.poke.name} />
      <div>
        <h2 className="name">{props.poke.name}</h2>
      </div>
      <div>
        <ul className="types">{pokeType}</ul>
      </div>
    </article>
  );
};

export default Pokemon;
