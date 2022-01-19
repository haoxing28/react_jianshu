import {CHANEG_LOGIN, LOG_OUT} from '../constant'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    login: false
})

export default function loginReducer(state = defaultState, action){
    const {type} = action
    switch (type) {
        case CHANEG_LOGIN:
            return state.set('login', action.value)
        case LOG_OUT:
            return state.set('login', action.value)
        default:
            return state
    }
}
