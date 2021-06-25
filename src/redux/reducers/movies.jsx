const initialState = {
  latestMovies: [],
  upComingMovies: [],
  movies: [],
  users: [],
  movie: null,
  isLoading: false,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_LATEST_MOVIES":
      return { ...state, isLoading: true };
    case "SET_LATEST_MOVIES":
      return { ...state, isLoading: false, latestMovies: payload };
      case "GET_UPCOMING_MOVIES":
        return { ...state, isLoading: true };
      case "SET_UPCOMING_MOVIES":
        return { ...state, isLoading: false, upComingMovies: payload };
    case "GET_ALL_MOVIES":
      return { ...state, isLoading: true };
      case "SET_MOVIE":
      return { ...state, movie: payload};
      case "CLEAR_MOVIE":
        return { ...state, movie: null};
    case "SET_ALL_MOVIES":
      return { ...state, isLoading: false, movies: payload };
    default:
      return state;
  }
}
