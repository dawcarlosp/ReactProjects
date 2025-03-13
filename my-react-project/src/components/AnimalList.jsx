

function AnimalList() {
    const animals = [
        {
            id: 1,
            name : "dog" ,
            img: "https://media.istockphoto.com/id/513133900/es/foto/oro-retriever-sentado-en-frente-de-un-fondo-blanco.jpg?s=612x612&w=0&k=20&c=0lRWImB8Y4p6X6YGt06c6q8I3AqBgKD-OGQxjLCI5EY="
        },
        {
            id: 2,
            name : "cat" ,
            img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQd1kWKsODGmz1P44kiLTfpeIOkaemYITnaRVOZEn372xCyrpNoQQ_dMDAV4dWLpVTDFekNEtlkJaDnhlTzoQWdNg"
        },
       ];
const HTMLAnimals = animals.map((animal,index) => {
    return <li key={index}>
        <p>{animal.id}</p>
        <h5>{animal.name}</h5>
        <img src={animal.img} alt="" />
    </li>
})

  return (
    <section>
        <ul>
            {HTMLAnimals}
        </ul>
    </section>
  )
}

export default AnimalList