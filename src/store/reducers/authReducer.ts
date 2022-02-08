import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    session: {
      currentUser: null,
      token: null,
      currentGeo: null,
    },
  },
  reducers: {
    login(state, action) {
      const { currentUser, token } = action.payload
      state.session.currentUser = currentUser
    },
    updateUser(state, action) {
      const { currentUser, token } = action.payload
      state.session.currentUser = currentUser
    },
    logout(state) {
      state.session.currentUser = null
    },
  },
})

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions
