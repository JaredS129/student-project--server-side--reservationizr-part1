const request = require("supertest");
const app = require("./app");

describe("app", () => {
  test("GET /reservations should respond with a list of reservations", async () => {
    const expected = [
      {
        id: "507f1f77bcf86cd799439011",
        partySize: 4,
        date: "2023-11-17T06:30:00.000Z",
        userId: "614abe145f317b89a2e36883",
        restaurantName: "Island Grill",
      },
      {
        id: "614abf0a93e8e80ace792ac6",
        partySize: 2,
        date: "2023-12-03T07:00:00.000Z",
        userId: "614abe145f317b89a2e36883",
        restaurantName: "Green Curry",
      },
    ];

    await request(app)
      .get("/reservations")
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual(expected);
      });
  });

  test("GET /reservations/:id should respond with a single reservation", async () => {
    const expected = {
      id: "614abf0a93e8e80ace792ac6",
      partySize: 2,
      date: "2023-12-03T07:00:00.000Z",
      userId: "614abe145f317b89a2e36883",
      restaurantName: "Green Curry",
    };

    await request(app)
      .get("/reservations/614abf0a93e8e80ace792ac6")
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual(expected);
      });
  });

  test("GET /reservations/:id should respond with 400 error code if id is invalid", async () => {
    const expected = { message: "id provided is invalid" };

    await request(app)
      .get("/reservations/invalidid")
      .expect(400)
      .expect((res) => {
        expect(res.body).toEqual(expected);
      });
  });
});
