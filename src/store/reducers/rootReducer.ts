import { combineReducers } from '@reduxjs/toolkit'
import { appReducer } from './appReducer'

export const rootReducer = combineReducers({
  app: appReducer
})

export type RootState = {
  app: ReturnType<typeof appReducer>
}