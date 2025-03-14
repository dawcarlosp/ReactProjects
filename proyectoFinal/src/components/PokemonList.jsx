import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard"
function PokemonList(props) {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons(50);
  }, [])
  const fetchPokemon = async (index) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    const data = await response.json();
    return data;
  }
  const getPokemons = async(cantidad) => {
    const pokemonArr = [];
    for (let i = 1; i <= cantidad; i++) {
      const pokemon = await fetchPokemon(i);
      pokemonArr.push(pokemon);
    }
    setPokemons(pokemonArr);
  }
  const pokemonCards = pokemons.map((pokemon) => {
    return   <PokemonCard key={pokemon.id} pokemon={pokemon} selectPokemon={props.selectPokemon}></PokemonCard>
  })
  return (
    <ul className="flex flex-wrap gap-2 items-center justify-center">
      {pokemonCards}
    </ul>
  )
}

export default PokemonList