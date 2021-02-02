import React from "react";

const PokeDetails = () => {
  return (
    <div className="modal modal__hiden">
      <div className="modal__dialog">
        <header className="modal__header">
          <h2 className="modal__title">Pokemon</h2>
          <span className="modal__close icon"></span>
        </header>
        <section>
          <img className="card__img" src="" alt="" />
          <ul className="">
            <li>Tipo:</li>
            <li>Evoluciona a:</li>
            <li>Ataques:</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PokeDetails;
