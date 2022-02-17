import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    signIn: {
      enabled: false
    },
    klipQR: {
      enabled: false,
      qrImage: null
    }
  },
  reducers: {
    setSignInEnabled(state, action) {
      state.signIn.enabled = action.payload
    },
    openKlipQR(state, action) {
      state.klipQR.enabled = true
      state.klipQR.qrImage = action.payload
    },
    closeKlipQR(state) {
      state.klipQR.enabled = false;
    },
  },
})

export const modalReducer = modalSlice.reducer
export const modalActions = modalSlice.actions
