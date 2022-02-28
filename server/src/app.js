const express = require("express");
const cors = require("cors");
const app = express();
const validId = require("./utils/validId");
const formatReservation = require("./utils/formatReservation");
const ReservationModel = require("./models/ReservationModel");

app.use(cors());
app.use(express.json());

app.get("/reservations", async (req, res) => {
  const reservations = await ReservationModel.find({});
  const formattedReservations = reservations.map((reservation) => {
    return formatReservation(reservation);
  });

  return res.status(200).send(formattedReservations);
});

app.get("/reservations/:id", async (req, res) => {
  const id = req.params.id;

  if (validId(id) === false) {
    return res.status(400).send({ message: "id provided is invalid" });
  }

  const reservation = await ReservationModel.findById(id);
  const formattedReservation = formatReservation(reservation);

  return res.status(200).send(formattedReservation);
});

module.exports = app;
