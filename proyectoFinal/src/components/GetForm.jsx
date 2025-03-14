import { useState } from "react"


function GetForm(props) {
    const [from, setFrom] = useState(1);
    const [to, setTo] = useState(10);
    const handleFromInput = (e) =>{
        setFrom(e.target.value);
    }
    const handleToInput = (e) =>{
        setTo(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(from);
        console.log(to);
        props.getPokemons(from,to);
    }
  return (
    <form onSubmit={handleSubmit} className="self-center">
        <fieldset>
            <label htmlFor="from">From:</label>
        <input type="number" id="from" min={1} onChange={handleFromInput}/>
        </fieldset>
        <fieldset>
            <label htmlFor="to">To:</label>
        <input type="number" id="to" min={1} onChange={handleToInput}/>
        </fieldset>
        <button>Get Pokemon</button>
    </form>
  )
}

export default GetForm