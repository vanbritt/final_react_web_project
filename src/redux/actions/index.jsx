import axios from 'axios'
const baseUrl = "http://localhost:8900";

const getRecommendedMovies = ()=> dispatch => {

        axios.get(`${baseUrl}/movies?_end=3`).then(response => 
                dispatch({type:"SET_LATEST_MOVIES", payload: response.data})
            ).catch(error => {
                dispatch({type: "SET_ERRORS", payload:error})
        })
}

const getUpComingMovies = ()=> dispatch => {

    axios.get(`${baseUrl}/movies?_end=6`).then(response => 
            dispatch({type:"SET_UPCOMING_MOVIES", payload: response.data})
        ).catch(error => {
            dispatch({type: "SET_ERRORS", payload:error})
    })
}

const getEvents= ()=> dispatch => {

    axios.get(`${baseUrl}/events`).then(response => 
            dispatch({type:"SET_EVENTS", payload: response.data})
        ).catch(error => {
            dispatch({type: "SET_ERRORS", payload:error})
    })
}

const getMovies = ()=> dispatch => {

    axios.get(`${baseUrl}/movies`).then(response => 
            dispatch({type:"SET_ALL_MOVIES", payload: response.data})
        ).catch(error => {
            dispatch({type: "SET_ERRORS", payload:error})
    })
}

const getMovie = (id)=> dispatch => {

    axios.get(`${baseUrl}/movies/${id}`).then(response => 
            dispatch({type:"SET_MOVIE", payload: response.data})
        ).catch(error => {
            dispatch({type: "SET_ERRORS", payload:error})
    })
}
const clearMovie = () => dispatch => {
    dispatch({type:"CLEAR_MOVIE"})
}

const saveTicket = (data)=> dispatch => {

  return axios.post(`${baseUrl}/users`, data)
}

export {getMovies, getRecommendedMovies, clearMovie, getMovie,saveTicket, getUpComingMovies, getEvents}