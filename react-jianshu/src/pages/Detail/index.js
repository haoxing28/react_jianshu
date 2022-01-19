import React, { PureComponent } from 'react'
import {DetailWrapper, Header, Content} from './style'
import {connect} from 'react-redux'
import { getDetailInfo } from '../../redux/actions/detail'

class Detail extends PureComponent {
    render() {
        const {title, content} = this.props
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html: content}}/>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        this.props.getDetailInfo();
    }
}

export default connect(
    state => ({
        title: state.get('detailReducer').get('title'),
        content: state.get('detailReducer').get('content')
    }),
    {getDetailInfo}
)(Detail)

