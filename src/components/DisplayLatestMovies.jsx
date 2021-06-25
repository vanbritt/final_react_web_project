import React from 'react'
import { Link } from 'react-router-dom'

const DisplayLatestMovies = (props) => {

    const renderList = ({movies})=> {
        if(movies){
            return movies.map(item => {
                return (
                    <Link  style={{textDecoration : "none"}} to={`/movies/${item.id}`} class="card col-md-3 mx-3 my-2" key={item.id}>
                    <img src={item.image} height="150" class="card-img-top img-responsive" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">{item.title}</h5>
                      <p class="card-text">
                      </p>
                      <Link to={`/movies/${item.id}/book`} className="btn btn-primary"> Book </Link>
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

export default DisplayLatestMovies
