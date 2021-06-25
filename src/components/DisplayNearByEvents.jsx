import React from 'react'
import { Link } from 'react-router-dom'

const DisplayNearByEvents = (props) => {

    const renderList = ({events})=> {
        if(events){
            return events.map(item => {
                return (
                        <div className="col-sm-6 mt-3" key={item.id}>
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                            </div>
                            </div>
                        </div>
                )
            })
        }
    }
    return (
        <React.Fragment>
                {renderList(props)}
        </React.Fragment>
    )
}

export default DisplayNearByEvents
