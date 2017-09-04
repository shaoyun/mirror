import {connect} from 'react-redux'
import model from './model'
import {actions} from './actions'
import render from './render'
import hook from './hook'
import Router from './router'
import defaults from './defaults'

module.exports = {
  model,
  actions,
  hook,
  defaults,
  connect,
  render,
}
