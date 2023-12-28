export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";
export const PAYMENT = "PAYMENT";
export const ADDRESS = "ADDRESS";
export const INCREASE_COUNT = "INCREASE_COUNT";
export const DECREASE_COUNT = "DECREASE_COUNT";

export const addCart = (id) => ({
  type: ADD_CART,
  payload: id,
});
export const removeCart = (id) => ({
  type: REMOVE_CART,
  payload: id,
});
export const payment = (id) => ({
  type: PAYMENT,
  payload: id,
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

export const saveAddress = (data) => (dispatch) => {
  API.post(`/user/address`, data)
    .then((res) => {
      dispatch(address(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(failed(id));
    });
};
