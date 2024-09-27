import "../styles.css";
import { useState, useEffect } from "react";

export default function MoviesGrid() {
  const [movies, setMovies]: any[] = useState([]);

  useEffect(() => {
    const m = ["aaa", "bbb"];
    setMovies(m);
  }, []); // when the component renders first

  return <div>{movies.length}</div>;
}
