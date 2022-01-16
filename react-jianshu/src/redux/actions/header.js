import {SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST} from '../constant'
import axios from 'axios'
import { fromJS } from 'immutable'

export const handleInputFocus = () => ({
    type: SEARCH_FOCUS
})

export const handleInputBlur = () => ({
    type: SEARCH_BLUR
})

const changeList = (data) => ({
    type: CHANGE_LIST,
    data: fromJS(data)
})

export const getList= () => {
    handleInputFocus();
    return (dispatch) => {
        dispatch(handleInputFocus());
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data))
        }).catch(()=> {
            console.log('error')
        })
    }
}