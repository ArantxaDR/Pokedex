import PokeJson from "../data/PokeJson.json";
import PokeList from "./PokeList.js";
import "../stylesheets/App.scss";
import Header from "./Header.js";
import Footer from "./Footer.js";
import React, { useState } from "react";

function App() {
  const [data] = useState(PokeJson);
  const [favorites, setFavorites] = useState([]);

  const handleClick = (id) => {
    if (!favorites.includes(id)) {
      const newFavorites = [...favorites, id];
      setFavorites(newFavorites);
    } else {
      const newFavorites = favorites.filter((favorite) => {
        return favorite !== id;
      });
      setFavorites(newFavorites);
    }
  };

  return (
    <div className="App">
      <Header />
      <main className="pokeMain">
        <PokeList data={data} handleClick={handleClick} favorites={favorites} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
