import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, 
    NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'

export default class Header extends Component {
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
                        <NavSearch/>
                        <i className='iconfont'>&#xe614;</i>
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
