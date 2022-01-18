import React, { Component } from 'react'
import Header from './common/Header'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header/>
            <Routes>
                <Route path='/' exact element={<Home/>}></Route>
                <Route path='/detail' exact element={<Detail/>}></Route>
            </Routes>
        </div>
      </Provider>
    )
  }
}

