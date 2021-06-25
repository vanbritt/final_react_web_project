import React from 'react'
import { Link } from 'react-router-dom'

const DisplayUpComingMovies = (props) => {

    const renderList = ({movies})=> {
        if(movies){
            return movies.map(item => {
                return (
                    <Link  style={{textDecoration : "none"}} to={`/movies/${item.id}`} className="card col-md-3 mx-3 my-2" key={item.id}>
                    <img src={item.image} height="150" className="card-img-top img-responsive" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">
                      </p>
                      {/* <Link to={`/movies/${item.id}/book`} className="btn btn-primary"> Book </Link> */}
                    </div>
                  </Link>
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

export default DisplayUpComingMovies
