import React from "react";
import PropTypes from "prop-types";

const Pokemon = (props) => {
  const pokemonTypes = props.types.map((pokemonType, index) => {
    return (
      <div key={index} className="cards_types_item">
        {pokemonType}
      </div>
    );
  });

  return (
    <article className="cards">
      <img src={props.image} alt={props.name} />
      <div className="cards_names">
        <h2>{props.name}</h2>
      </div>
      <div className="cards_types">{pokemonTypes}</div>
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
