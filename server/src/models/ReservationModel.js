const mongoose = require("mongoose");
const { Schema } = mongoose;

const reservationSchema = new Schema({
  partySize: { type: Number, minimum: 1, required: true },
  date: { type: Date, required: true },
  userId: { type: String, required: true },
  restaurantName: { type: String, required: true },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
