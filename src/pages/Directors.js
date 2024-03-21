import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {

  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
    .then(r => r.json())
    .then(data => setDirectors(data))
    .catch(error => console.error(error))
  }, []);

  const directorsElement = directors.map((director) => {

    const directorMovies = director.movies.map((movie) => (
      <li key={director.id += 10}>{movie}</li>
    ));

    return (
      <article key={director.id}>
        <h2>{director.name}</h2>
        <ul>
          {directorMovies}
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
        <h1>Directors Page</h1>
        {directorsElement}
      </main>
    </>
  );
};

export default Directors;
