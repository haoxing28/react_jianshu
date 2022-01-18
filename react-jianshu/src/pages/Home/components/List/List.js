import React, { Component } from 'react'
import { ListItem, ListInfo, LoadMore } from './style'
import {connect} from 'react-redux'
import {getMoreList} from '../../../../redux/actions/home'

class List extends Component {
    render() {
        const {articleList, page, getMoreList} = this.props
        return (
            <div>
                {
                    articleList.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <img alt='' className='pic' src={item.get('imgUrl')} />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        );
                    })
                }
                <LoadMore onClick={()=>getMoreList(page)}>More</LoadMore>
            </div>
        )
    }
}

export default connect(
    state => ({
        articleList: state.get('homeReducer').get('articleList'),
        page: state.get('homeReducer').get('articlePage')
    }),
    {getMoreList}
)(List)

