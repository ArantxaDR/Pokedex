import React from "react";
import PropTypes from "prop-types";

const Pokemon = (props) => {
  const pokemonTypes = props.types.map((pokemonType, index) => {
    return (
      <li key={index} className="Pokemon__typesList--item">
        {pokemonType}
      </li>
    );
  });

  return (
    <article className="cards">
      <img src={props.image} alt={props.name} />
      <div>
        <h2 className="name">{props.name}</h2>
      </div>
      <div>
        <ul className="types">{pokemonTypes}</ul>
      </div>
    </article>
  );
};

Pokemon.defaultProps = {
  name: "Pokemon anónimo",
  image: "../imgs/faviconpokeball.png",
  types: "No pertenece a ningún tipo",
};

Pokemon.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  types: PropTypes.array,
};
export default Pokemon;
