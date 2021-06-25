const initialState = {
  events: [],
  errors: false,
  isLoading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_EVENTS":
      return { ...state, isLoading: true };
    case "SET_EVENTS":
      return { ...state, isLoading: false, events: payload };
    default:
      return state;
  }
}
