import {combineReducers} from 'redux-immutable'
import headerReducer from './header'
import homeReducer from './home'

export default combineReducers({
	headerReducer,
	homeReducer
})
