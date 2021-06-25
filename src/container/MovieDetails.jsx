import React, { Component } from 'react'
import {connect } from 'react-redux'
import PropTypes from 'prop-types'
import {getMovie, clearMovie} from '../redux/actions'
import DisplayMovieDetails from '../components/DisplayMovieDetails';
export class MovieDetails extends Component {
    componentDidMount(){
        this.props.getMovie(this.props.match.params.id);
    }

    componentWillUnmount(){

        this.props.clearMovie()
    }
    render() {
        return (
                    <div className="row">
                    <h1 className="text-center mt-3">Movie Details</h1>

                    <DisplayMovieDetails movie= {this.props.movie}></DisplayMovieDetails>
                    </div>
                
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movie : state.movies.movie
    }
}
const mapDispatchToProps = {
    getMovie, clearMovie
}

MovieDetails.propTypes = {
    movie : PropTypes.object.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps) (MovieDetails)
