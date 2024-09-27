import "../styles.css";
import { useState, useEffect, Key } from "react";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []); // when the component renders first

  return (
    <div className="movies-grid">
      {movies.map(
        (movie: {
          id: Key | null | undefined;
          image: any;
          title: string | undefined;
          genre: string | undefined;
          rating: string | undefined;
        }) => (
          <div key={movie.id} className="movie-card">
            <img src={`images/${movie.image}`} alt={movie.title} />
            <div className="movie-card-info">
              <h3 className="movie-card-title">{movie.title}</h3>
              <p className="movie-card-genre">{movie.genre}</p>
              <p className="movie-card-rating">{movie.rating}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}
