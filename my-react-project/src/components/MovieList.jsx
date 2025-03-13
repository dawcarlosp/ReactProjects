import React, { useEffect } from 'react'

function MovieList() {
    const movies = ["Lords of the Rings", "Star Wars", "Avengers", "Forest Gump"];
    //Primer argumento representa elemento y el segundo el indice
    const HTMLMovies = movies.map((movie, index) =>{
        return <p key={movie}>{index + 1}:{movie}</p>
    })
    useEffect(() =>{
        console.log("MovieList mounted");
    },[])
    //El array vacio significa que useEffect se va a ejecutar una sola vez
    useEffect(() =>{
       return () =>{
        console.log("MovieList unmounted");
       }
    },[])
  return (
    <section>
          <h2>Movies</h2>
          {HTMLMovies}
    </section>
  )
}

export default MovieList