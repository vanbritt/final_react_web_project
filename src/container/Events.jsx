import React, { Component } from 'react'
import DisplayLatestMovies from '../components/DisplayLatestMovies'
import {getEvents} from '../redux/actions'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import _ from 'lodash';
import DisplayNearByEvents from '../components/DisplayNearByEvents'
class Events extends Component {

    componentDidMount(){
        this.props.getEvents();
    }
    render() {
        return (
            <div className="row mt-2 text-center center mt-2">  
                    <h2>NearBy Events</h2>
                    <DisplayNearByEvents events={this.props.events}></DisplayNearByEvents>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state)
    return {
        events: _.orderBy(state.events.events, 'id', ['desc']) ,
        error: state.events.error
    }
}

const mapDispatchToProps = {
    getEvents
}

Events.propTypes ={
    getEvents: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Events)
