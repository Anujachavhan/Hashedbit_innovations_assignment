
import React from "react";

function BookingSuccess({ bookingData, setPage }) {

  const bookingId = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="success-page">

      <h1>Seat Booked Successfully!</h1>

      <h2>Booking ID: {bookingId}</h2>

      <h3>Booking Details</h3>

      <p>
        <strong>Movie:</strong> {bookingData.movie}
      </p>

      <p>
        <strong>Name:</strong> {bookingData.name}
      </p>

      <p>
        <strong>Email:</strong> {bookingData.email}
      </p>

      <p>
        <strong>Mobile:</strong> {bookingData.mobile}
      </p>

      <button onClick={() => setPage("movies")}>
        Book Another Movie
      </button>

    </div>
  );
}

export default BookingSuccess;
