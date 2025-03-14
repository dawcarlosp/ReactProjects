
function PokemonDetails(props) {
 const {pokemon} = props;
  return (
  <section className="flex items-center justify-center ">
    <div className="bg-blue-500 w-100 h-100 sm:w-100 md:w-50 md:h-50 flex flex-col items-center justify-center rounded-xl hover:bg-blue-500 hover:scale-101">
        <h2 className="text-4xl font-bold text-center">{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt="pokemon img" />
        <h3>HP : {pokemon.stats[0].base_stat}</h3>
    </div>
  </section>
  )
}

export default PokemonDetails