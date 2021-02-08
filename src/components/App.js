import PokeList from "./PokeList.js";
import PokeFilters from "./PokeFilters.js";
import "../stylesheets/App.scss";
import Header from "./Header.js";
import Footer from "./Footer.js";

import PokeDetails from "./PokeDetails.js";
import React, { useEffect, useState } from "react";
import GetDataFromApi from "../services/GetDataFromApi.js";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    GetDataFromApi().then((data) => {
      setPokemons(data);
    });
  }, []);
  console.log(pokemons);
  return (
    <>
      <div className="App">
        <Header />
        <PokeFilters />
        <PokeList />
        <PokeDetails />
        <Footer />
      </div>
    </>
  );
};

export default App;
