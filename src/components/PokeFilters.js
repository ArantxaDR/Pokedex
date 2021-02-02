import React from "react";
import FilterByName from "./FilterByName.js";
import FilterByType from "./FilterByType.js";

const PokeFilters = () => {
  return (
    <section>
      <form>
        <FilterByName />
        <FilterByType />
      </form>
    </section>
  );
};

export default PokeFilters;
