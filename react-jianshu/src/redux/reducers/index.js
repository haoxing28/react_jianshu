import {combineReducers} from 'redux-immutable'
import headerReducer from './header'
import homeReducer from './home'
import detailReducer from './detail'
import loginReducer from './login'

export default combineReducers({
	headerReducer,
	homeReducer,
	detailReducer,
	loginReducer
})
