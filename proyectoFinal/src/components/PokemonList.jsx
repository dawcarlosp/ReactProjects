import { useContext, useEffect, useState } from "react";
import PokemonCard from "./PokemonCard"
import GetForm from "./GetForm";
import { PokemonContext } from "../context/pokemon.context";
function PokemonList(props) {
  //const [pokemons, setPokemons] = useState([]);
  const {pokemons, setPokemons} = useContext(PokemonContext)
  useEffect(() => {
    getPokemons(1,10);
  }, [])
  const fetchPokemon = async (index) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    const data = await response.json();
    return data;
  }
  const getPokemons = async(from,to) => {
    const pokemonArr = [];
    for (let i = from; i <= to; i++) {
      const pokemon = await fetchPokemon(i);
      pokemonArr.push(pokemon);
    }
    setPokemons(pokemonArr);
  }
  const pokemonCards = pokemons.map((pokemon) => {
    return   <PokemonCard key={pokemon.id} pokemon={pokemon} selectPokemon={props.selectPokemon}></PokemonCard>
  })
  return (
    <div>
          <GetForm getPokemons={getPokemons}></GetForm>
    <ul className="flex flex-wrap gap-2 items-center justify-center">
      {pokemonCards}
    </ul>
    </div>
  )
}

export default PokemonList