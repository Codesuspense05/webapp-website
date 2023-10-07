import axios from "axios";
import { server } from "../../server";

// create orders
export const createOrder =
  (
    name,
    description,
    color,
    category,
    tags,
    originalPrice,
    discountPrice,
    stock,
    shopId,
    images,
    shopname,
    penname,
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "OrderCreateRequest",
      });

      const { data } = await axios.post(
        `${server}/order/create-orders`,
        name,
        description,
        color,
        category,
        tags,
        originalPrice,
        discountPrice,
        stock,
        shopId,
        images,
        shopname,
        penname
      );
      dispatch({
        type: "OrderCreateSuccess",
        payload: data.order,
      });
    } catch (error) {
      dispatch({
        type: "OrderCreateFail",
        payload: error.response.data.message,
      });
    }
  };

// get all orders of user
export const getAllOrdersOfUser = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllOrdersUserRequest",
    });

    const { data } = await axios.get(
      `${server}/order/get-all-orders/${userId}`
    );

    dispatch({
      type: "getAllOrdersUserSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "getAllOrdersUserFailed",
      payload: error.response.data.message,
    });
  }
};

// get all orders of seller
export const getAllOrdersOfShop = (shopId) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllOrdersShopRequest",
    });

    const { data } = await axios.get(
      `${server}/order/get-seller-all-orders/${shopId}`
    );

    dispatch({
      type: "getAllOrdersShopSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "getAllOrdersShopFailed",
      payload: error.response.data.message,
    });
  }
};

// get all orders of Admin
export const getAllOrdersOfAdmin = () => async (dispatch) => {
  try {
    dispatch({
      type: "adminAllOrdersRequest",
    });

    const { data } = await axios.get(`${server}/order/admin-all-orders`, {
      withCredentials: true,
    });

    dispatch({
      type: "adminAllOrdersSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "adminAllOrdersFailed",
      payload: error.response.data.message,
    });
  }
};
