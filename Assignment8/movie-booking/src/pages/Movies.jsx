import React from "react";

function Movies({ setPage, setSelectedMovie }) {

  const movies = [
    {
      id: 1,
      name: "12th Fail",
      image: "/images/12thfail.jpg",
      description: "An inspiring story about hard work, determination and success."
    },
    {
      id: 2,
      name: "Sairat",
      image: "/images/sairat.jpg",
      description: "A Marathi romantic story about love and relationships."
    },
    {
      id: 3,
      name: "Tumbbad",
      image: "/images/tumbbad.jpg",
      description: "A mysterious story involving an ancient treasure."
    },
    {
      id: 4,
      name: "Kantara",
      image: "/images/kantara.jpg",
      description: "A powerful story based on culture, tradition and nature."
    },
    {
      id: 5,
      name: "3 Idiots",
      image: "/images/3idiots.jpg",
      description: "Three friends experience friendship, college life and dreams."
    },
    {
      id: 6,
      name: "Dangal",
      image: "/images/dangal.jpg",
      description: "An inspiring story of a father and his daughters."
    },
    {
      id: 7,
      name: "Drishyam",
      image: "/images/drishyam.jpg",
      description: "A family thriller full of mystery and suspense."
    },
    {
      id: 8,
      name: "Zindagi Na Milegi Dobara",
      image: "/images/znmd.jpg",
      description: "Three friends go on a journey that changes their lives."
    },
    {
      id: 9,
      name: "RRR",
      image: "/images/rrr.jpg",
      description: "An action-packed story about friendship and courage."
    },
    {
      id: 10,
      name: "KGF",
      image: "/images/kgf.jpg",
      description: "A powerful man rises from poverty to become a legend."
    },
    {
      id: 11,
      name: "Andhadhun",
      image: "/images/andhadhun.jpg",
      description: "A suspenseful thriller filled with unexpected twists."
    },
    {
      id: 12,
      name: "Stree",
      image: "/images/stree.jpg",
      description: "A horror comedy about a mysterious presence."
    },
    {
      id: 13,
      name: "Taare Zameen Par",
      image: "/images/taare.jpg",
      description: "A teacher helps a young student discover his hidden talent."
    },
    {
      id: 14,
      name: "Gully Boy",
      image: "/images/gullyboy.jpg",
      description: "A young man follows his dream of becoming a rapper."
    },
    {
      id: 15,
      name: "Chhichhore",
      image: "/images/chhichhore.jpg",
      description: "A story about friendship, failure and never giving up."
    },
    {
      id: 16,
      name: "Barfi!",
      image: "/images/barfi.jpg",
      description: "A heartwarming story about love, friendship and life."
    }
  ];

  function selectMovie(movie) {
    setSelectedMovie(movie);
    setPage("details");
  }

  return (
    <div className="movies-page">

      <h1>Indian Cinema Booking</h1>

      <div className="movie-grid">

        {movies.map(function(movie) {
          return (
            <div
              className="movie-card"
              key={movie.id}
              onClick={() => selectMovie(movie)}
            >
              <img src={movie.image} alt={movie.name} />

              <h2>{movie.name}</h2>

              <button>View Details</button>
            </div>
          );
        })}

      </div>

    </div>
  );
}

export default Movies;