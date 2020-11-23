import Pokemon from "./Pokemon";

function PokeList(props) {
  const handleClick = (ev) => {
    props.handleClick(parseInt(ev.currentTarget.id));
  };

  const pokemonList = props.data.map((pokemonItem) => {
    const { id, name, types, url } = pokemonItem;
    return (
      <li
        key={id}
        id={id}
        className={
          props.favorites.includes(parseInt(id))
            ? "PokeList__item PokeList__item--fav"
            : "PokeList__item"
        }
        onClick={handleClick}
      >
        <Pokemon name={name} types={types} image={url} />
      </li>
    );
  });

  return <ul className="mainList">{pokemonList}</ul>;
}

export default PokeList;
