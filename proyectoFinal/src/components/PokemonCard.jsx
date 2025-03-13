import { useEffect, useState } from "react"

function PokemonCard() {
    const [pokemon, setPokemon] = useState({})
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/1")
        .then((response) => response.json())
        .then((data) => setPokemon(data));
    },[])
  return pokemon.id ? (
  <li className="">
    <h2>{pokemon.name}</h2>
    <img src={pokemon.sprites.front_default} alt="" />
    <h3>HP: {pokemon.stats[0].base_stat}</h3>
  </li>
  ) : (
    <p>Cargando....</p>
  )
}

export default PokemonCard