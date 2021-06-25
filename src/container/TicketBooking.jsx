import React, { Component } from 'react'
import { connect } from 'react-redux';

import {saveTicket} from '../redux/actions';
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'

export class TicketBooking extends Component {

    constructor(props){
        super(props);

        this.state = {
            seats: "",
            showdate:"",
            showtime: "",
            movie: this.props.match.params.id
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })

    }

    onSubmit = (event)=> {
        event.preventDefault();
        this.props.saveTicket(this.state).then(
            response => {
                 this.props.history.push({
                     pathname : `/movies/${this.state.movie}/book/complete`,
                     state : response.data
                 })

            }
        ).catch(error => {
            console.log(error)

        })

    }
    render() {
        return (
            <div className="row d-flex justify-content-center mt-5" >
                    <div className="col-sm-6">
                    <form className="row g-3 card z-depth-2" onSubmit={this.onSubmit}>
                            <h3 className="text-center">  Ticket Booking Details</h3>
                            <div className="col-md-12">
                                <label htmlFor="showdate" className="form-label">Show Date : </label>
                                <input type="date" onChange={this.onChange} className="form-control" id="showdate" name="showdate" required/>
                            </div>
                            <div className="col-md-12">

                                <label htmlFor="showtime" className="form-label">Show Time: </label>
                                <input type="time" onChange={this.onChange}  className="form-control" id="showtime" name="showtime"  required/>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="seats" className="form-label">Number of Seats</label>
                                <select id="seats" defaultValue="1" onChange={this.onChange}  className="form-select" name="seats">
                                <option value="1">Choose...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary col-sm-12 my-3">Book</button>
                            </div>
                    </form>
                    </div>
                
            </div>
        )
    }
}

const mapDispatchToProps = {
    saveTicket
}

TicketBooking.propTypes ={
    saveTicket: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(TicketBooking)
