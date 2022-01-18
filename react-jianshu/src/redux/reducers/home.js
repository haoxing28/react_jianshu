import {CHANEG_HOME_DATA, ADD_ARTICLE_LIST, TOGGLE_TOP_SHOW} from '../constant'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
})

export default function homeReducer(state = defaultState, action){
    const {type} = action
    switch (type) {
        case CHANEG_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
		        articleList: fromJS(action.articleList),
		        recommendList: fromJS(action.recommendList)
            });
        case ADD_ARTICLE_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(action.list),
                articlePage: action.nextPage
            })
        case TOGGLE_TOP_SHOW:
            return state.set('showScroll', action.data)
        default:
            return state
    }
}
