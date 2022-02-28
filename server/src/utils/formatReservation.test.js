const formatReservation = require("./formatReservation");

const reservationFromMongoose = {
  _id: "614abf0a93e8e80ace792ac6",
  partySize: 2,
  date: "2023-12-03T07:00:00.000Z",
  userId: "614abe145f317b89a2e36883",
  restaurantName: "Green Curry",
};

describe("formatReservation", () => {
  it("should format _id to id", () => {
    const expected = {
      id: "614abf0a93e8e80ace792ac6",
      partySize: 2,
      date: "2023-12-03T07:00:00.000Z",
      userId: "614abe145f317b89a2e36883",
      restaurantName: "Green Curry",
    };
    const received = formatReservation(reservationFromMongoose);
    expect(received).toEqual(expected);
  });
});
