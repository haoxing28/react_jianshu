import React, { Component } from 'react'
import Header from './common/Header'
import { Provider } from 'react-redux'
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header/>
      </Provider>
    )
  }
}

