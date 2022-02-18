import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    signIn: {
      enabled: false
    },
    klipQR: {
      enabled: false,
      qrImage: null,
      requestKey: null,
    },
    confetti: {
      enabled: false,
    }
  },
  reducers: {
    setSignInEnabled(state, action) {
      state.signIn.enabled = action.payload
    },
    openKlipQR(state, action) {
      state.klipQR.enabled = true
      state.klipQR.qrImage = action.payload.qrImage
      state.klipQR.requestKey = action.payload.requestKey
    },
    closeKlipQR(state) {
      state.klipQR.enabled = false;
    },
    setConfettiEnabled(state, action) {
      state.confetti.enabled = action.payload
    }
  },
})

export const modalReducer = modalSlice.reducer
export const modalActions = modalSlice.actions
