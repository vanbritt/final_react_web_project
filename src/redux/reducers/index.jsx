import {combineReducers} from 'redux'
import movies from './movies'
import events from './events'
const rootReducer= combineReducers({movies,events});

export default rootReducer