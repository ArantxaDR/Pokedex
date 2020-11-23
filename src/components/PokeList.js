import Pokemon from "./Pokemon";

function PokeList(props) {
  const handleClick = (ev) => {
    props.handleClick(parseInt(ev.currentTarget.id));
  };

  const pokemonList = props.data.map((pokemonItem) => {
    const { id, name, types, url } = pokemonItem;
    return (
      <div
        key={id}
        id={id}
        className={
          props.favorites.includes(parseInt(id))
            ? "mainList mainList__item--fav"
            : "mainList__item"
        }
        onClick={handleClick}
      >
        <Pokemon className="favourite" name={name} types={types} image={url} />
      </div>
    );
  });

  return <div className="mainList_item">{pokemonList}</div>;
}

export default PokeList;
