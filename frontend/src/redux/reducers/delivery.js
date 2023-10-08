import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const riderReducer = createReducer(initialState, {
  LoadRiderRequest: (state) => {
    state.isLoading = true;
  },
  LoadRiderSuccess: (state, action) => {
    state.isRider = true;
    state.isLoading = false;
    state.rider = action.payload;
  },
  LoadRiderFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.isRider = false;
  },

  // get all riders ---admin
  getAllRidersRequest: (state) => {
    state.isLoading = true;
  },
  getAllRidersSuccess: (state, action) => {
    state.isLoading = false;
    state.riders = action.payload;
  },
  getAllRiderFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});
