import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {LoginWrapper, LoginBox, Input, Button} from './style'
import { login } from '../../redux/actions/login'
import { Navigate } from 'react-router-dom'

class Login extends PureComponent {
    render() {
        const {loginStatus} = this.props
        if(!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='Username' ref={input => this.username = input}/>
                        <Input placeholder='Password' type='password' ref={input => this.password = input}/>
                        <Button onClick={() => this.props.login(this.username, this.password)}>Login</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else{
            return <Navigate replace to="/" />
        }
    }
}


export default connect(
    state => ({
        loginStatus: state.get('loginReducer').get('login')
    }),
    {login}
)(Login)

