import { useState } from "react";

function HeaderComponent(props){
    //Desesctructuración
    const {greetings, links} = props;
    let placeHolder = "Escribe aqui";
    //let number = 1;
    const [number, setNumber] = useState(1);
    const [myValue] = useState("");
    const addOne = () =>{
        //number++;
        setNumber(number + 1)
    }
    const info = () =>{
        alert("Gracias por usar la app!");
    }
    const handleChange = (ev) =>{
        if(ev.target.value == "Mesi"){
            alert("Has dicho Mesi")
        }
    }
    return (
        <header className="flex flex-col items-center justify-center bg-gray-900">
            <h3>{greetings}</h3>
            <h1 className="text-blue-600 text-9xl font-bold hover:text-purple-600 cursor-pointer" onClick={info}>CreatiFlow!</h1>
            <h2 className="text-blue-600 text-2xl font-bold hover:text-purple-600 cursor-pointer" onClick={addOne}>Number: {number}</h2>
            <nav className="w-full text-white">
                <ul className="flex justify-around">
                    <li className="my-5"><a href="" className="p-2 border border-blue-600 hover:border-purple-600 rounded-sm">{links.home}</a></li>
                    <li className="my-5"><a href="" className="p-2 border border-blue-600 hover:border-purple-600 rounded-sm">{links.blog}</a></li>
                    <li className="my-5"><a href="" className="p-2 border border-blue-600 hover:border-purple-600 rounded-sm">{links.news}</a></li>
                    <li className="my-5"><a href="" className="p-2 border  border-blue-600 hover:border-purple-600 rounded-sm">{links.contact}</a></li>
                    <li className="my-5"><input type="text"className="p-2 border  border-blue-600 hover:border-purple-600 rounded-sm" onChange={handleChange} placeholder={placeHolder} value={myValue}/></li>
                </ul>
            </nav>
        </header>
    )
}
export default HeaderComponent;