import { PokemonCard } from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons?.map(pokemon => (
        <PokemonCard 
          name={pokemon.name} 
          key={pokemon.name} 
          image={pokemon.sprites.front_default} 
          types={pokemon.types}
        />
      ))}
    </div>
  );
}

export { PokemonList };