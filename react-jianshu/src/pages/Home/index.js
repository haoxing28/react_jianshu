import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import Topic from './components/Topic/Topic'
import List from './components/List/List'
import Recommend from './components/Recommend/Recommend'
import Writer from './components/Writer/Writer'
import {connect} from 'react-redux'
import { getHomeInfo, changeScrollTopShow } from '../../redux/actions/home'

class Home extends Component {

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    render() {
        const {showScroll} = this.props;
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {showScroll ? <BackTop onClick={this.handleScrollTop}>Top</BackTop> : null}
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.getHomeInfo();
        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
}

export default connect(
    state => ({
        showScroll: state.get('homeReducer').get('showScroll')
    }),
    {getHomeInfo, changeScrollTopShow}
)(Home)

