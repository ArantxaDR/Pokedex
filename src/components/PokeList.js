import Pokemon from "./Pokemon";
import React from "react";

const Pokelist = () => {
  return (
    <section>
      <ul className="cards">
        <Pokemon />
      </ul>
    </section>
  );
};

export default Pokelist;
