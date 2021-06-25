import React, { Component } from 'react'
import DisplayLatestMovies from '../components/DisplayLatestMovies'
import {getMovies} from '../redux/actions'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import _ from 'lodash';
class LatestMovies extends Component {

    componentDidMount(){
        this.props.getMovies();
    }
    render() {
        return (
            <div className="row mt-2 text-center center d-flex justify-content-center">  
                    <h2>Latest Movies</h2>
                    <DisplayLatestMovies movies={this.props.movies}></DisplayLatestMovies>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state)
    return {
        movies: _.orderBy(state.movies.movies, 'year', ['desc']) ,
        error: state.movies.error
    }
}

const mapDispatchToProps = {
    getMovies
}

LatestMovies.propTypes ={
    getMovies: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestMovies)
