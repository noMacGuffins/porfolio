import { combineReducers } from '@reduxjs/toolkit'
import { authReducer } from './authReducer'

export const rootReducer = combineReducers({
  auth: authReducer
})

export type RootState = {
  auth: ReturnType<typeof rootReducer>
}