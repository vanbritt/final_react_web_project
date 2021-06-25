import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import NotFound from "../components/NotFound";
import Footer from "../components/Layout/Footer";
import LatestMovies from "./LatestMovies";
import Header from "../components/Layout/Header";
import Home from "./Home";
import MovieDetails from "./MovieDetails";
import TicketBooking from "./TicketBooking";
import TicketBookingDetails from "../components/TicketBookingDetails";
import UpComingMovies from "./UpComingMovies";
import Events from "./Events";

export class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header></Header>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/events" component={Events}></Route>
            <Route exact path="/movies" component={LatestMovies}></Route>
            <Route exact path="/upComingMovies" component={UpComingMovies}></Route>
            <Route exact path="/movies/:id" component={MovieDetails}></Route>
            <Route exact path="/movies/:id/book" component={TicketBooking}></Route>
            <Route exact path="/movies/:id/book/complete" component={TicketBookingDetails}></Route>
            <Route component={NotFound}></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default Routing;
