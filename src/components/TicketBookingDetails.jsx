import React from 'react'
import QRCode from 'react-qr-code'

const TicketBookingDetails = (props) => {
    const {state} = props.location;
    return (
        <div className="row mt-4">
            <h3 className="text-center">Ticket Booking Summary</h3>
                <div className="card mb-3 col-sm-12" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <QRCode value={JSON.stringify(state)}></QRCode>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Ticket Booking Details</h5>
                        <p className="card-text">Show Date : {state.showdate}</p>
                        <p className="card-text">Show Time: {state.showtime}</p>
                        <p className="card-text">Number of Seats : {state.seats}</p>
                    </div>
                    </div>
                </div>
                </div>
            
        </div>
    )
}

export default TicketBookingDetails
