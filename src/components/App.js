import React from "react";
import PokeJson from "../data/PokeJson.json";
import PokeList from "./PokeList.js";
import "../stylesheets/App.css";
import Header from "./Header.js";
import Footer from "./Footer.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="pokeMain">
          <PokeList Pokemon={PokeJson} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
