const apiCall = () => {
  return fetch(`https://pokeapi.co/api/v2`)
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((pokemon) => {
        console.log(pokemon);
        return {};
      });
    });
};

export default apiCall;
