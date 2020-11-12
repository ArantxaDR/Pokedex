import React from "react";
import PokeJson from "../data/PokeJson.json";
import PokeList from "./PokeList.js";
import "../stylesheets/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pokedex</h1>
        </header>
        <main className="pokeMain">
          <PokeList Pokemon={PokeJson} />
        </main>
      </div>
    );
  }
}

export default App;
