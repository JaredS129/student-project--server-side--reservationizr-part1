import "./ReservationList.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5001/reservations");
    const data = await response.json();
    setReservations(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Upcoming reservations</h1>
      <ul>
        {reservations.map((reservation) => {
          return (
            <li key={reservation.id}>
              <h2>{reservation.restaurantName}</h2>
              <p>{reservation.date}</p>
              <a href="*">View details</a>
              <hr />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ReservationList;
