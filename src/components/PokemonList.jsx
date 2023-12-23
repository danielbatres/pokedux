import { PokemonCard } from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map(pokemon => (
        <PokemonCard />
      ))}
    </div>
  );
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill("")
}

export { PokemonList };