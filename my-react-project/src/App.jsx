import './App.css'
import ButtonComponent from './components/ButtonComponent'
import HeaderComponent from './components/HeaderComponent'
import MovieList from './components/MovieList'
import AnimalList from './components/AnimalList'
import Login from './components/Login'
import MemeList from './components/MemeList'
import { useEffect, useState } from "react";
function App() {
  //para mostrar peliculas
  const [showMovies, setShowMovies] = useState(true);
  //Condiciones
  const condition = false;
  //Variable reactiva
  const [greetings] = useState("Bienvenidos a mi web");
  //Variable corriente, pasando de padre a hijo
  const links = {
    home: "Home",
    blog: "Blog",
    news: "News",
    contact: "Contact us"
  }
  //para pasar de padre a hijo
  const login = (userInfo) => {
    alert(userInfo.username);
    setUser(userInfo)
  }
  const [user,setUser] = useState({});
    /*Hooks
  useEffect(() => {
    console.log("Ejecución cada vez que se renderiza el componente raiz")  
  })
    */
  useEffect(() => {
    console.log("Ejecución cada cambio de la variable reactiva user")  
  }, [user])
  return (
    <>
      <HeaderComponent greetings={greetings} links = {links}></HeaderComponent>
      {/*}Si user.username no esta vacío muestra el h1 */}
      {user.username && <h1>Hola {user.username} </h1>}
      <Login handleLogin={login}></Login>
      {condition && <h2>Condicion se cumple</h2>}
      {/*Ternarios*/ }
      { condition ? (<h4>Se cumple</h4>) : (<h4>No se cumple</h4>)}
      <button onClick={() => setShowMovies(!showMovies)} className='p-2 flex items-center justify-center bg-indigo-500 text-white'>Mostrar Peliculas</button>
     {showMovies && <MovieList></MovieList>}

     <AnimalList></AnimalList>
     <MemeList></MemeList>
    </>
  )
}

export default App
