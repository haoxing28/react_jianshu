import React, { Component } from 'react'
import { RecommendWrapper, RecommendItem } from './style'
import {connect} from 'react-redux'

class Recommend extends Component {
    render() {
        return (
            <RecommendWrapper>
                {
                    this.props.recommendList.map((item) => {
                        console.log(item)
                        return <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>
                    })
                }
            </RecommendWrapper>
        )
    }
}

export default connect(
    state => ({
        recommendList: state.get('homeReducer').get('recommendList')
    }),
    {}
)(Recommend)
