import { combineReducers } from '@reduxjs/toolkit'
import { appReducer } from './appReducer'
import { modalReducer } from './modalReducer'
export const rootReducer = combineReducers({
  app: appReducer,
  modal: modalReducer,
})

export type RootState = {
  app: ReturnType<typeof appReducer>
  modal: ReturnType<typeof modalReducer>
}