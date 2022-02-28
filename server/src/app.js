const express = require("express");
const cors = require("cors");
const app = express();
const validId = require("./utils/validId");
const formatReservation = require("./")

app.use(cors());
app.use(express.json());

app.get("/reservations", async (req, res) => {
    const reservations = await PropertyModel.find({});
    const formattedReservations = reservations.map((reservation) => {
      return formatReservation(reservation);
    });
  
    return res.status(200).send(formattedReservations);
  });

module.exports = app;
