
import React, { useState } from "react";

function BookingForm({ movie, setPage, setBookingData }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name: name,
      email: email,
      mobile: mobile,
      movie: movie.name
    };

    setBookingData(data);
    setPage("success");
  }

  return (
    <div className="booking-page">

      <h1>Book Your Seat</h1>

      <h2>{movie.name}</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Mobile:</label>
          <br />
          <input
            type="tel"
            value={mobile}
            onChange={(event) => setMobile(event.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">
          Submit
        </button>

      </form>

      <br />

      <button onClick={() => setPage("details")}>
        Back to Movie
      </button>

    </div>
  );
}

export default BookingForm;
