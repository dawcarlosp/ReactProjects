import { useState } from 'react';
import './App.css'
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
function App() {
  const [selectedPokemon, setSelectedPokemon] = useState();
  return (
    <>
    {selectedPokemon && (
      <div>
        <h2 className='text-6xl text-indigo-600 font-bold text-center'>Pokemon Seleccionado</h2>
        <PokemonDetails pokemon={selectedPokemon}></PokemonDetails>
      </div>
    )}
    <h2 className='text-6xl text-blue-600 font-bold text-center'>Lista de pokemons</h2>
      <PokemonList selectPokemon={setSelectedPokemon}></PokemonList>
    </>
  )
}

export default App
