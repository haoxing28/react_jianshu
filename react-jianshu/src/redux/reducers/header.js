import {SEARCH_BLUR, SEARCH_FOCUS, CHANGE_LIST, 
    MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE} from '../constant'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false, 
    list: [],
    mouseIn: false,
    page: 1,
    totalPage: 1
})
export default function headerReducer(state = defaultState, action){
    const {type} = action
    switch (type) {
        case SEARCH_BLUR:
            return state.set('focused', false)
            // return {focused: false}
        case SEARCH_FOCUS:
            return state.set('focused', true)
        case CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
            //return state.set('list', action.data).set('totalPage', action.totalPage)
        case MOUSE_ENTER:
            return state.set('mouseIn', true)
        case MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case CHANGE_PAGE:
            return state.set('page', action.page)
        default:
            return state
    }
}