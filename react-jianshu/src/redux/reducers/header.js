import {SEARCH_BLUR, SEARCH_FOCUS, CHANGE_LIST} from '../constant'
import { fromJS } from 'immutable'

const defaultState = fromJS({focused: false, list: []})
export default function headerReducer(state = defaultState, action){
    const {type} = action
    switch (type) {
        case SEARCH_BLUR:
            return state.set('focused', false)
            // return {focused: false}
        case SEARCH_FOCUS:
            return state.set('focused', true)
        case CHANGE_LIST:
            return state.set('list', action.data)
        default:
            return state
    }
}