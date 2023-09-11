import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const orderReducer = createReducer(initialState, {
  // create orders of user for walkin
  OrderCreateRequest: (state) => {
    state.isLoading = true;
  },
 OrderCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.order = action.payload;
    state.success = true;
  },
OrderCreateFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },


  getAllOrdersUserRequest: (state) => {
    state.isLoading = true;
  },
  getAllOrdersUserSuccess: (state, action) => {
    state.isLoading = false;
    state.orders = action.payload;
  },
  getAllOrdersUserFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  
  // get all orders of shop
  getAllOrdersShopRequest: (state) => {
    state.isLoading = true;
  },
  getAllOrdersShopSuccess: (state, action) => {
    state.isLoading = false;
    state.orders = action.payload;
  },
  getAllOrdersShopFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all orders for admin
  adminAllOrdersRequest: (state) => {
    state.adminOrderLoading = true;
  },
  adminAllOrdersSuccess: (state, action) => {
    state.adminOrderLoading = false;
    state.adminOrders = action.payload;
  },
  adminAllOrdersFailed: (state, action) => {
    state.adminOrderLoading = false;
    state.error = action.payload;
  },

  clearErrors: (state) => {
    state.error = null;
  },
});
