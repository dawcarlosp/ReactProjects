import './App.css'
import ButtonComponent from './components/ButtonComponent'
import HeaderComponent from './components/HeaderComponent'
import { useState } from "react";
function App() {
  //Variable reactiva
  const [greetings] = useState("Bienvenidos a mi web");
  //Variable corriente
  const links = {
    home: "Home",
    blog: "Blog",
    news: "News",
    contact: "Contact us"
  }
  return (
    <>
      <HeaderComponent greetings={greetings} links = {links}></HeaderComponent>
      <ButtonComponent></ButtonComponent>
    </>
  )
}

export default App
