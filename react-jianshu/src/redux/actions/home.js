import {CHANEG_HOME_DATA, ADD_ARTICLE_LIST, TOGGLE_TOP_SHOW} from '../constant'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeHomeData = (data) => ({
    type: CHANEG_HOME_DATA,
    topicList: data.topicList,
    articleList: data.articleList,
    recommendList: data.recommendList
})

const addHomeList = (data, nextPage) => ({
    type: ADD_ARTICLE_LIST,
    list: fromJS(data),
    nextPage
})

const toggleTopShow = (data) => ({
    type: TOGGLE_TOP_SHOW,
    data
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const data = res.data;
            dispatch(changeHomeData(data.data))
        }).catch(()=> {
            console.log('error')
        })
    }
}

export const getMoreList = (page) =>{
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result, page + 1))
        }).catch(()=> {
            console.log('error')
        })
    }
}

export const changeScrollTopShow = () => {
    return (dispatch) => {
        if(document.documentElement.scrollTop > 100) {
            dispatch(toggleTopShow(true))
        } else {
            dispatch(toggleTopShow(false))
        }
    }
}
    
