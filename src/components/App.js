import PokeList from "./PokeList.js";
import PokeFilters from "./PokeFilters.js";
import "../stylesheets/App.scss";
import Header from "./Header.js";
import Footer from "./Footer.js";
import PokeDetails from "./PokeDetails.js";
import React, { useEffect } from "react";
import GetDataFromApi from "../services/GetDataFromApi.js";

const App = () => {
  useEffect(() => {
    GetDataFromApi().then((data) => {
      console.log(data);
    });
  });

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
