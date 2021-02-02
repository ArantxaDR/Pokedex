import React from "react";

const FilterByType = () => {
  return (
    <>
      <label className="form__label" htmlFor="type">
        Tipo:
      </label>
      <select className="form__input-text" name="type" id="type">
        <option value="">Fuego</option>
        <option value="">Agua</option>
        <option value="">Bicho</option>
        <option value="">Veneno</option>
      </select>
    </>
  );
};

export default FilterByType;
