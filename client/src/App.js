import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Reservation from "./components/Reservation";
import ReservationList from "./components/ReservationList";

const App = () => {
  return (
    <>
      <Header className="header" />
      <div className="container">
        <Switch>
          <Route path="/reservations/:id">
            <Reservation />
          </Route>
          <Route exact path="/">
            <ReservationList />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default App;
