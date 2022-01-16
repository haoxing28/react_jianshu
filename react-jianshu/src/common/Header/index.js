import React, { Component } from 'react'
import {connect} from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper, Logo, Nav, 
         NavItem, NavSearch, Addition,
         Button, SearchWrapper, SearchInfo,
         SearchInfoSwitch, SearchInfoTitle,
         SearchInfoItem, SearchInfoList } from './style'
import {handleInputFocus, handleInputBlur, getList} from '../../redux/actions/header'

class Header extends Component {
    getListArea = () => {
        if(this.props.focused){
            return (<SearchInfo>
                                <SearchInfoTitle>Top
                                    <SearchInfoSwitch>
                                        Change
                                    </SearchInfoSwitch>
                                </SearchInfoTitle>
                                <SearchInfoList>
                                    {
                                        this.props.list.map((item)=>{
                                            return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                                        })
                                    }
                                </SearchInfoList>
                            </SearchInfo>)
            } else{
                return null
            }
        }
    render() {
        return (
            <HeaderWrapper>
                <Logo href='/'/>
                <Nav>
                    <NavItem className='left active'>Home</NavItem>
                    <NavItem className='left'>Download</NavItem>
                    <NavItem className='right'>Login</NavItem>
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                        in={this.props.focused}
                        timeout={200}
                        classNames='slide'>
                        <NavSearch className={this.props.focused? 'focused' : ''} 
                        onFocus={this.props.getList}
                        onBlur={this.props.handleInputBlur}/>
                        </CSSTransition>
                        <i className={this.props.focused? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                    <Addition>
                        <Button className='writing'>
                            <i className='iconfont'>&#xe615;</i>
                            Write Article</Button>
                        <Button className='reg'>Register</Button>
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
        list: state.get('headerReducer').get('list')
    }),
    {handleInputFocus,handleInputBlur,getList}
)(Header)
