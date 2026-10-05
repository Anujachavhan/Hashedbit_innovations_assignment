import React, { useState } from "react";

import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import BookingForm from "./pages/BookingForm";
import BookingSuccess from "./pages/BookingSuccess";

function App() {
  const [page, setPage] = useState("movies");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [bookingData, setBookingData] = useState(null);

  return (
    <div>
      {page === "movies" && (
        <Movies
          setPage={setPage}
          setSelectedMovie={setSelectedMovie}
        />
      )}

      {page === "details" && (
        <MovieDetails
          movie={selectedMovie}
          setPage={setPage}
        />
      )}

      {page === "booking" && (
        <BookingForm
          movie={selectedMovie}
          setPage={setPage}
          setBookingData={setBookingData}
        />
      )}

      {page === "success" && (
        <BookingSuccess
          bookingData={bookingData}
          setPage={setPage}
        />
      )}
    </div>
  );
}

export default App;