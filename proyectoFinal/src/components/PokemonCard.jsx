

function PokemonCard(props) {
  const {pokemon, selectPokemon} = props;
  /*
    const [pokemon, setPokemon] = useState({})
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/1")
        .then((response) => response.json())
        .then((data) => setPokemon(data));
    },[])
    */
  return pokemon.id ? (
  <li className="bg-blue-600 w-100 h-100 sm:w-100 md:w-40 md:h-40 flex flex-col items-center justify-center rounded-xl hover:bg-blue-500 hover:scale-101" onClick={()=>selectPokemon(pokemon)}>
    <h2>{pokemon.name}</h2>
    <img src={pokemon.sprites.front_default} alt="" />
    <h3>HP: {pokemon.stats[0].base_stat}</h3>
  </li>
  ) : (
    <p>Cargando....</p>
  )
}

export default PokemonCard