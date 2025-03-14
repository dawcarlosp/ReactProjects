
function PokemonDetails(props) {
 const {pokemon} = props;
  return (
  <section className="flex items-center justify-center">
    <div className="bg-blue-600 w-96 h-96 md:w-64 md:h-64 flex flex-col items-center justify-center rounded-xl hover:bg-blue-500 hover:scale-105">
        <h2 className="text-4xl font-bold text-center">{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} className="hover:scale-200" alt="pokemon img" />
        <h3>HP : {pokemon.stats[0].base_stat}</h3>
    </div>
  </section>
  )
}

export default PokemonDetails