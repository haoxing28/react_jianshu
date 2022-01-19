import React, { Component } from 'react'
import {connect} from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {Link} from 'react-router-dom'
import { HeaderWrapper, Logo, Nav, 
         NavItem, NavSearch, Addition,
         Button, SearchWrapper, SearchInfo,
         SearchInfoSwitch, SearchInfoTitle,
         SearchInfoItem, SearchInfoList } from './style'
import {handleInputFocus, handleInputBlur, 
    getList, handleMouseEnter,handleMouseLeave, handleChangePage, logout} from '../../redux/actions/header'

class Header extends Component {
    getListArea = () => {
        const { focused, list, mouseIn, page, totalPage, 
            handleMouseEnter, handleMouseLeave, handleChangePage} = this.props
        const newList = list.toJS();
        const pageList = []
        if(newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++){
            pageList.push(
                <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
            )
        }
        }
        if(focused || mouseIn){
            return (<SearchInfo>
                                <SearchInfoTitle 
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}>Top
                                    <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                                        <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                                        Change
                                    </SearchInfoSwitch>
                                </SearchInfoTitle>
                                <SearchInfoList>
                                    {pageList}
                                </SearchInfoList>
                            </SearchInfo>)
            } else{
                return null
            }
        }
    render() {
        const { focused, handleInputBlur, getList, list, login } = this.props
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className='left active'>Home</NavItem>
                    <NavItem className='left'>Download</NavItem>
                    {
                        login? <NavItem className='right' onClick={this.props.logout}>Logout</NavItem> : 
                        <Link to='/login'>
                            <NavItem className='right'>Login</NavItem>
                        </Link>
                    }
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                        in={focused}
                        timeout={200}
                        classNames='slide'>
                        <NavSearch className={focused? 'focused' : ''} 
                        onFocus={()=>getList(list)}
                        onBlur={handleInputBlur}/>
                        </CSSTransition>
                        <i className={focused? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                    <Addition>
                        <Link to='/write'>
                            <Button className='writing'>
                                <i className='iconfont'>&#xe615;</i>
                                Write Article</Button>
                            <Button className='reg'>Register</Button>
                        </Link>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         focused: state.focused
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleInputFocus() {
//             const action = {
//                 type: 'SEARCH_FOCUS'
//             };
//             dispatch(action)
//         },
//         handleInputBlur() {
//             const action = {
//                 type: 'SEARCH_BLUR'
//             };
//             dispatch(action)
//         },
//     }
// }

export default connect(
    state => ({
        // focused: state.getIn(['headerReducer','focused'])
        focused: state.get('headerReducer').get('focused'),
        list: state.get('headerReducer').get('list'),
        page: state.get('headerReducer').get('page'),
        totalPage: state.get('headerReducer').get('totalPage'),
        mouseIn: state.get('headerReducer').get('mouseIn'),
        login: state.get('loginReducer').get('login')
    }),
    {handleInputFocus,handleInputBlur,getList,handleMouseEnter,handleMouseLeave,handleChangePage,logout}
)(Header)
