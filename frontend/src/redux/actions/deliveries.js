import axios from "axios";
import { server } from "../../server";

// get all riders --- admin
export const getAllRiders = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllRidersRequest",
    });

    const { data } = await axios.get(`${server}/rider/admin-all-riders`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllRidersSuccess",
      payload: data.riders,
    });
  } catch (error) {
    dispatch({
      type: "getAllRiderFailed",
    //   payload: error.response.data.message,
    });
  }
};
