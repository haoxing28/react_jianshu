import React, { Component } from 'react'
import { TopicWrapper, TopicItem } from './style'
import {connect} from 'react-redux'

class Topic extends Component {
    render() {
        const {topicList} = this.props
        return (
            <TopicWrapper>
                {
                    topicList.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img alt='' className='topic-pic'
                                    src={item.get('imgUrl')}/>
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
}

export default connect(
    state => ({
        topicList: state.get('homeReducer').get('topicList')
    }),
    {}
)(Topic)
