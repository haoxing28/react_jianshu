import React, { Component } from 'react'
import Header from './common/Header'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Login from './pages/Login'
import Write from './pages/Write'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header/>
            <Routes>
                <Route path='/' exact element={<Home/>}></Route>
                <Route path='/detail/:id' exact element={<Detail/>}></Route>
                <Route path='/login' exact element={<Login/>}></Route>
                <Route path='/write' exact element={<Write/>}></Route>
            </Routes>
        </div>
      </Provider>
    )
  }
}

