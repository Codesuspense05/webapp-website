import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, {
  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.isAuthenticated = true;
    state.loading = false;
    state.user = action.payload;
  },
  LoadUserFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  // update user information
  updateUserInfoRequest: (state) => {
    state.loading = true;
  },
  updateUserInfoSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  updateUserInfoFailed: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  // update user address
  updateUserAddressRequest: (state) => {
    state.addressloading = true;
  },
  updateUserAddressSuccess: (state, action) => {
    state.addressloading = false;
    state.successMessage = action.payload.successMessage;
    state.user = action.payload.user;
  },
  updateUserAddressFailed: (state, action) => {
    state.addressloading = false;
    state.error = action.payload;
  },

  // delete user address
  deleteUserAddressRequest: (state) => {
    state.addressloading = true;
  },
  deleteUserAddressSuccess: (state, action) => {
    state.addressloading = false;
    state.successMessage = action.payload.successMessage;
    state.user = action.payload.user;
  },
  deleteUserAddressFailed: (state, action) => {
    state.addressloading = false;
    state.error = action.payload;
  },

  // get all users --- admin
  getAllUsersRequest: (state) => {
    state.usersLoading = true;
  },
  getAllUsersSuccess: (state,action) => {
    state.usersLoading = false;
    state.users = action.payload;
  },
  getAllUsersFailed: (state,action) => {
    state.usersLoading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
  clearMessages: (state) => {
    state.successMessage = null;
  },



    // forgot password
    forgotPasswordRequest: (state) => {
      state.Loading = true;
      state.error = null
    },
    forgotPasswordSuccess: (state,action) => {
      state.Loading = false;
      state.message = action.payload;
    },
    forgotPasswordFailed: (state,action) => {
      state.Loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    // clearMessage: (state) => {
    //   state.successMessage = null;
    // },
  
      // reset password
  resetPasswordRequest: (state) => {
    state.Loading = true;
    state.error = null
  },
  resetPasswordSuccess: (state,action) => {
    state.Loading = false;
    state.success = action.payload
  },
  resetPasswordFailed: (state,action) => {
    state.Loading = false;
    state.error = action.payload;
  },

  // clearMessage: (state) => {
  //   state.successMessage = null;
  // },


});


