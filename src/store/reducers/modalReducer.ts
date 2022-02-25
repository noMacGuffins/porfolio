import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
	  teamDetail: {
		  enabled: false,
		  name: null,
		  desc: null,
		  imgSrc: null, 
	  }
  },
  reducers: {
	setTeamDetail(state, action) {
		state.teamDetail= action.payload
	}
  },
})

export const modalReducer = modalSlice.reducer
export const modalActions = modalSlice.actions
