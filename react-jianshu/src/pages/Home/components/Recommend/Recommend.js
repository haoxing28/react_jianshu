import React, { PureComponent } from 'react'
import { RecommendWrapper, RecommendItem } from './style'
import {connect} from 'react-redux'

class Recommend extends PureComponent {
    render() {
        return (
            <RecommendWrapper>
                {
                    this.props.recommendList.map((item) => {
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
