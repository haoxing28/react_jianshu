import {SEARCH_FOCUS, SEARCH_BLUR, 
    CHANGE_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE} from '../constant'
import axios from 'axios'
import { fromJS } from 'immutable'
import {logoutAction} from './login'

const changeList = (data) => ({
    type: CHANGE_LIST,
    data: fromJS(data),
    totalPage: fromJS(Math.ceil(data.length / 10))
})

export const handleInputFocus = () => ({
    type: SEARCH_FOCUS
})

export const logout = () => {
    return (dispatch) => {
        dispatch(logoutAction())
    }
}

export const handleChangePage = (page, totalPage, spin) => {
    let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
    if(originAngle) {
        originAngle = parseInt(originAngle, 10)
    }else{
        originAngle = 0;
    }
    spin.style.transform = 'rotate('+ (originAngle + 360) + 'deg)';
    return (dispatch) => {
        if(page < totalPage) {
        dispatch(changePage(page + 1))
    } else{
        dispatch(changePage(1))
    }
    }
}

export const handleInputBlur = () => ({
    type: SEARCH_BLUR
})

export const handleMouseEnter = () => ({
    type: MOUSE_ENTER
})

export const handleMouseLeave = () => ({
    type: MOUSE_LEAVE
})

export const getList= (list) => {
    return (dispatch) => {
        dispatch(handleInputFocus());
        if(list.size === 0) {
            axios.get('/api/headerList.json').then((res) => {
                const data = res.data;
                dispatch(changeList(data.data))
            }).catch(()=> {
                console.log('error')
            })
        }
    }
    
}

const changePage = (page) => ({
    type: CHANGE_PAGE,
    page: page
})