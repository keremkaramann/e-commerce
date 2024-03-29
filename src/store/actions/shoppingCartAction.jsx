import { API } from "../../endpoint/instance";

export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";
export const PAYMENT = "PAYMENT";
export const ADDRESS = "ADDRESS";
export const FETCH_ADDRESS = "FETCH_ADDRESS";
export const EDIT_ADDRESS = "EDIT_ADDRESS";
export const INCREASE_COUNT = "INCREASE_COUNT";
export const DECREASE_COUNT = "DECREASE_COUNT";
export const SAVE_BILLING = "SAVE_BILLING";
export const ORDER = "ORDER";
export const FETCH_CREDIT_CARDS = " FETCH_CREDIT_CARDS";
export const EDIT_CREDIT_CARD = "EDIT_CREDIT_CARD";
export const RESET_CART = "RESET_CART";
export const FETCH_PREV_ORDERS = "FETCH_PREV_ORDERS";

export const finalOrder = (data) => ({
  type: ORDER,
  payload: data,
});
export const addCart = (id) => ({
  type: ADD_CART,
  payload: id,
});
export const resetCart = () => ({
  type: RESET_CART,
});
export const removeCart = (id) => ({
  type: REMOVE_CART,
  payload: id,
});
export const payment = (data) => ({
  type: PAYMENT,
  payload: data,
});
export const fetchCredit = (data) => ({
  type: FETCH_CREDIT_CARDS,
  payload: data,
});
export const editCreditCard = (data) => ({
  type: EDIT_CREDIT_CARD,
  payload: data,
});
export const address = (data) => ({
  type: ADDRESS,
  payload: data,
});
export const editAddressDis = (data) => ({
  type: EDIT_ADDRESS,
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
  type: FETCH_ADDRESS,
  payload: data,
});
export const saveBillingAddress = (data) => ({
  type: SAVE_BILLING,
  payload: data,
});
export const fetchPrevOrders = (data) => ({
  type: FETCH_PREV_ORDERS,
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
      const addressesArray = Object.values(res.data);
      dispatch(address(addressesArray));
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
export const editAddress = (data) => (dispatch) => {
  const getToken = localStorage.getItem("token");

  const headers = getToken
    ? {
        Authorization: `${getToken}`,
      }
    : {};
  API.put("user/address", data, { headers })
    .then((res) => {
      dispatch(editAddressDis(res.data));
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
  API.get("user/card", { headers })
    .then((res) => {
      const cardArray = Object.values(res.data);
      dispatch(fetchCredit(cardArray));
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

  API.post("user/card", data, { headers })
    .then((res) => {
      const cardArray = Object.values(res.data);
      dispatch(payment(cardArray));
    })
    .catch((err) => {
      console.error("Error saving card:", err);
    });
};
export const editCard = (data) => (dispatch) => {
  const getToken = localStorage.getItem("token");

  const headers = getToken
    ? {
        Authorization: `${getToken}`,
      }
    : {};

  API.put("user/card", data, { headers })
    .then((res) => {
      dispatch(editCreditCard(res.data));
    })
    .catch((err) => {
      console.error("Error saving card:", err);
    });
};

export const order = (data) => (dispatch) => {
  const getToken = localStorage.getItem("token");

  const headers = getToken
    ? {
        Authorization: `${getToken}`,
      }
    : {};

  API.post("order", data, { headers })
    .then((res) => {
      dispatch(finalOrder(data));
      dispatch(resetCart());
    })
    .catch((err) => {
      console.error("Error saving card:", err);
    });
};
export const getPrevOrder = () => (dispatch) => {
  const getToken = localStorage.getItem("token");

  const headers = getToken
    ? {
        Authorization: `${getToken}`,
      }
    : {};

  API.get("order", { headers })
    .then((res) => {
      dispatch(fetchPrevOrders(res.data));
    })
    .catch((err) => {
      console.error("Error saving card:", err);
    });
};
