import { createSlice } from '@reduxjs/toolkit'
import { LOCALE_EN } from 'src/modules/constants'

const appSlice = createSlice({
  name: 'auth',
  initialState: {
    locale: LOCALE_EN
  },
  reducers: {
    setLocale(state, action) {
      state.locale = action.payload
    },
  },
})

export const appReducer = appSlice.reducer
export const appActions = appSlice.actions
