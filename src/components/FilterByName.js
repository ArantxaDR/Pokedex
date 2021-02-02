import React from "react";

const FilterByName = () => {
  return (
    <>
      <label className="form__label" htmlFor="name">
        Busca tu pokemon
      </label>
      <input className="form__input-text" type="text" name="name" />
    </>
  );
};

export default FilterByName;
