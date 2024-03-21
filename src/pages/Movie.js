import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {

  const [movie, setMovie] = useState([]);
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(r => r.json())
    .then(data => setMovie(data))
    .catch(error => console.error(error))
  }, [movieId]);

  if(!movie.genres){
    return <h1>Loading...</h1>
  };

  const genresElement = movie.genres.map((genre) => (
    <span key={Math.floor(Math.random() * 1000)}>{genre}</span>
  ));

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {genresElement}
      </main>
    </div>
  );
};

export default Movie;
