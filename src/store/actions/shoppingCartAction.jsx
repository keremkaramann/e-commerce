import { API } from "../../endpoint/instance";

export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";
export const PAYMENT = "PAYMENT";
export const ADDRESS = "ADDRESS";
export const GET_ADDRESS = "GET_ADDRESS";
export const INCREASE_COUNT = "INCREASE_COUNT";
export const DECREASE_COUNT = "DECREASE_COUNT";
export const SAVE_BILLING = "SAVE_BILLING";
export const addCart = (id) => ({
  type: ADD_CART,
  payload: id,
});
export const removeCart = (id) => ({
  type: REMOVE_CART,
  payload: id,
});
export const payment = (data) => ({
  type: PAYMENT,
  payload: data,
});
export const address = (data) => ({
  type: ADDRESS,
  payload: data,
});
export const increaseCount = (productId) => ({
  type: INCREASE_COUNT,
  payload: productId,
});

export const decreaseCount = (productId) => ({
  type: DECREASE_COUNT,
  payload: productId,
});

export const getAddress = (data) => ({
  type: GET_ADDRESS,
  payload: data,
});
export const saveBillingAddress = (data) => ({
  type: SAVE_BILLING,
  payload: data,
});
export const saveAddress = (data) => (dispatch) => {
  const getToken = localStorage.getItem("token");

  const headers = getToken
    ? {
        Authorization: `${getToken}`,
      }
    : {};

  API.post("user/address", data, { headers })
    .then((res) => {
      dispatch(address(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
export const fetchAddress = () => (dispatch) => {
  const getToken = localStorage.getItem("token");

  const headers = getToken
    ? {
        Authorization: `${getToken}`,
      }
    : {};
  API.get("user/address", { headers })
    .then((res) => {
      dispatch(getAddress(res.data));
    })
    .catch((err) => {
      console.error("Error fetching address: ", err);
    });
};
export const fetchCreditCard = () => (dispatch) => {
  const getToken = localStorage.getItem("token");

  const headers = getToken
    ? {
        Authorization: `${getToken}`,
      }
    : {};
  API.get("/card", { headers })
    .then((res) => {
      dispatch(payment(res.data));
    })
    .catch((err) => {
      console.error("Error fetching address: ", err);
    });
};
export const saveCard = (data) => (dispatch) => {
  const getToken = localStorage.getItem("token");

  const headers = getToken
    ? {
        Authorization: `${getToken}`,
      }
    : {};

  API.post("card", data, { headers })
    .then((res) => {
      dispatch(payment(res.data));
    })
    .catch((err) => {
      console.error("Error saving card:", err);
    });
};
