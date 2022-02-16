import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    signInEnabled: false
  },
  reducers: {
    setSignInEnabled(state, action) {
      state.signInEnabled = action.payload
    },
  },
})

export const modalReducer = modalSlice.reducer
export const modalActions = modalSlice.actions
