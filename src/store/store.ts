import { createStore, Store } from 'redux'
import { createWrapper, Context } from 'next-redux-wrapper'
import { compose, applyMiddleware } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware, { Task } from 'redux-saga'
import ReduxThunk from 'redux-thunk'
import { rootReducer } from './reducers/rootReducer'
import rootSaga from './saga/rootSaga'

export interface State {
  tick: string
}

export interface SagaStore extends Store {
  sagaTask?: Task
}

const reducer = (state, action) => {
  return rootReducer(state, action)
}

const makeStore = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware()

  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(sagaMiddleware, ReduxThunk))
      : composeWithDevTools(applyMiddleware(sagaMiddleware, ReduxThunk))

  const store = createStore(reducer, enhancer)
  sagaMiddleware.run(rootSaga)
  return store
}
console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')

export const wrapper = createWrapper<Store<State>>(makeStore, { debug: Boolean(process.env.CONF_IS_DEVELOPMENT) })
