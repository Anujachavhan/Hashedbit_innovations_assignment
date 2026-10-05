
import React from "react";

function MovieDetails({ movie, setPage }) {

  return (
    <div className="details-page">

      <h1>Movie Details</h1>

      <img
        src={movie.image}
        alt={movie.name}
        width="250"
      />

      <h2>{movie.name}</h2>

      <p>{movie.description}</p>

      <button onClick={() => setPage("movies")}>
        Back to Movies
      </button>

      <button onClick={() => setPage("booking")}>
        Book Seat
      </button>

    </div>
  );
}

export default MovieDetails;
