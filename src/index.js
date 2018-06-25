import React from 'react'
import { render } from 'react-dom'
import './css/index.css'
import App from './containers/App'
import thunkMiddleware from 'redux-thunk'
import { reducer } from './reducers/reducer'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

const middleware = [ thunkMiddleware ]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(...middleware)
))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
