const arr = [];
const apiCall = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0")
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((item) => {
        fetch(item.url)
          .then((response) => response.json())
           .then((allpokemon) =>console.log(allpokemon); //arr.push(allpokemon));
      });
      
    });
};

export default apiCall;
