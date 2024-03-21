import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {

  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then(r => r.json())
    .then(data => setActors(data))
    .catch(error => console.error(error))
  }, []);

  const actorsElement = actors.map((actor) => {

    const actorMovies = actor.movies.map((movie) => (
      <li key={actor.id += 10}>{movie}</li>
    ));

    return (
      <article key={actor.id}>
        <h2>{actor.name}</h2>
        <ul>
          {actorMovies}
        </ul>
      </article>
    )
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorsElement}
      </main>
    </>
  );
};

export default Actors;
