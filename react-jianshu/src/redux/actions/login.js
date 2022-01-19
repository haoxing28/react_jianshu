import {CHANEG_LOGIN, LOG_OUT} from '../constant'
import axios from 'axios'

const changeLogin = () => ({
    type: CHANEG_LOGIN,
    value: true
})

export const logoutAction = () => ({
    type: LOG_OUT,
    value: false
})

export const login = (username, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?username' + username + '&password=' + password).then((res) => {
            const result = res.data.data;
            if(result) {
                dispatch(changeLogin())
            } 
        }).catch(()=> {
            console.log('error')
        })
    }
}
   