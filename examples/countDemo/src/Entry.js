import React, { Component } from 'react';

import {Provider} from 'react-redux'
import configureStore from './configureStore';
import App from './App'

let store = configureStore()

export default class Entry extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
