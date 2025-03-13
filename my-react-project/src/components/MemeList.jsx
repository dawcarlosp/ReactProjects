import { useEffect, useState } from "react"

function MemeList() {
//Propiedad reactiva para almacenar el array
const [memes, setMemes] = useState([]);
const HTMLMemes = memes.map((meme) => {
    return (
        <li key={meme.id} className="border">
            <div className="bg-indigo-500 rounded-full w-50 ">
            <h2>{meme.name}</h2>
            <img src={meme.url} alt="" className="object-cover rounded-full w-24 h-24 border"/>
            </div>
        </li>
    )
})
        useEffect(()=> {
            fetch("https://api.imgflip.com/get_memes")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setMemes(data.data.memes);
            })
        },[])

  return (
   <ul>
    {HTMLMemes}
   </ul>
  )
}

export default MemeList