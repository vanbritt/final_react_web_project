import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecommendedMovies from "../components/RecommendedMovies";
import Slide from "../components/Slide";
import PropTypes from 'prop-types';
import {getRecommendedMovies} from '../redux/actions';
import { connect } from "react-redux";
import "../Styles.css";
class Home extends Component {

    componentDidMount(){
        this.props.getRecommendedMovies();
    }
  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center">Welcome on E-Cube</h1>
        <div className="row mt-3 text-center">
          <Link  to={`/movies`} className="card col-sm-4 Link" >
            <div className="card-body">Latest Movies</div>
          </Link>
          <Link  to={`/upComingMovies`} className="card col-sm-4 Link" >
            <div className="card-body">Upcoming Movies</div>
          </Link>
          <Link  to={`/events`} className="card col-sm-4 Link">
            <div className="card-body">NearBy Events</div>
          </Link>
        </div>
        <div className="row">
          <Slide></Slide>
        </div>
        <div className="row mt-5 d-flex justify-content-center mx-2 text-center">
          <h1 className="text-center">Recommended Movies</h1>
          <RecommendedMovies movies={this.props.recommendedMovies}></RecommendedMovies>
        </div>
      </div>
    );
  }
}

const mapStateToProps= (state) =>{
    console.log(state);
    return {
        recommendedMovies: state.movies.latestMovies,
        error: state.movies.error
    }
}

const mapDispatchToProps={
    getRecommendedMovies
}

Home.propTypes= {
    getRecommendedMovies: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
