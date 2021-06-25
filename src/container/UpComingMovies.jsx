import React, { Component } from 'react'
import DisplayLatestMovies from '../components/DisplayLatestMovies'
import {getUpComingMovies} from '../redux/actions'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import _ from 'lodash';
import DisplayUpComingMovies from '../components/DisplayUpcomingMovies'
class UpComingMovies extends Component {

    componentDidMount(){
        this.props.getUpComingMovies();
    }
    render() {
        return (
            <div className="row mt-2 text-center center d-flex justify-content-center">  
                    <h2>UpComing  Movies</h2>
                    <DisplayUpComingMovies movies={this.props.movies}></DisplayUpComingMovies>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state)
    return {
        movies: _.orderBy(state.movies.upComingMovies, 'year', ['desc']) ,
        error: state.movies.error
    }
}

const mapDispatchToProps = {
    getUpComingMovies
}

UpComingMovies.propTypes ={
    getUpComingMovies: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(UpComingMovies)
