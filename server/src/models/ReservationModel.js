const mongoose = require("mongoose");
const { Schema } = mongoose;

const propertySchema = new Schema({
  partySize: { type: Number, required: true },
  date: { type: Date, required: true },
  userId: { type: String, required: true },
  restaurantName: { type: String, required: true },
});

const Reservation = mongoose.model("Reservation", propertySchema);

module.exports = Reservation;