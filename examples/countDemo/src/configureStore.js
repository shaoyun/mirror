
import {models} from 'react-mirrorx/lib/model'
import {store, createStore} from 'react-mirrorx/lib/store'
import {options} from 'react-mirrorx/lib/defaults'

import mirror, {actions} from 'react-mirrorx'

mirror.model({
  name: 'app',
  initialState: {
      count: 0,
      result: ""
  },
  reducers: {
    increment(state) { return {
      ...state,
      count: state.count + 1
    } },
    decrement(state) { return {
      ...state,
      count: state.count - 1
    } },
    fetchResult(state, result) {
      return {
        ...state,
        result: result
      }
    }
  },
  effects: {
    async incrementAsync() {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
      actions.app.increment()
    },
    async fetchRequest(username, getState) {
        let resp = await fetch(`https://api.github.com/users/${username}`)
        let json = await resp.json();
        actions.app.fetchResult(JSON.stringify(json));
        console.log(getState());
        return json;
    }
  }
})

const {initialState, middlewares} = options

export default function configureStore() {
    createStore(models, initialState, middlewares)
    return store;
}