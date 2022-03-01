import "./ReservationList.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { formatDate } from "../utils/formatDate";

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
          const formattedDate = formatDate(reservation.date);

          return (
            <li key={reservation.id}>
              <h2 className="reservation-title">
                {reservation.restaurantName}
              </h2>
              <p className="date">{formattedDate}</p>
              <Link to={"reservations/" + reservation.id}>View details →</Link>
              <hr className="divider" />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ReservationList;
