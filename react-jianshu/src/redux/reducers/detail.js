import {CHANEG_DETAIL_DATA} from '../constant'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    title:'',
    content: ''
})

export default function detailReducer(state = defaultState, action){
    const {type} = action
    switch (type) {
        case CHANEG_DETAIL_DATA:
            return state.merge({
                title: action.title,
		        content: action.content
            });
        default:
            return state
    }
}
