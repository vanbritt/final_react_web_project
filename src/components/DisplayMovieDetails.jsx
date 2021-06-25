import React from 'react'
import {Link} from 'react-router-dom'

const DisplayMovieDetails = (props) => {
    const renderData = ({movie} )=> {
        if(movie){
            return (
                <div className="card mb-3 col-sm-12" >
                <div className="row g-0 text-justify justify-content">
                     <div className="col-md-4">
                         <img src={movie.image} alt="..."/>
                     </div>
                    <div className="col-md-8">
                    <div className="row card-body">
                        <h5 className="card-title row">
                            <div className="col-sm-6">Title: {movie.title}</div>
                            <div className="col-sm-6">Release Date: {movie.year}</div>
                            </h5>
                        <p className="card-text row ">{movie.plot}</p>
                        <p className="card-text row"> <span className="bold">Duration : { Math.floor( Number.parseInt(movie.runtime)/60)} H : {Number.parseInt(movie.runtime)%60} Min </span></p>
                        <p className="card-text row"><span >Rating :  {movie.ratings}</span></p>

                    </div>
                    </div>
                    <Link to={`/movies/${movie.id}/book`} className="col-sm-12 btn btn-primary mt-3"> Book Movie</Link>
                 </div>

            </div>
            )
        }
    }
    return (
        <React.Fragment>
                {renderData(props)}
            
        </React.Fragment>
    )
}

export default DisplayMovieDetails
