export const ADD_CART = "ADD_CART";
export const PAYMENT = "PAYMENT";
export const ADDRESS = "ADDRESS";

export const addCart = (id) => ({
  type: ADD_CART,
  payload: id,
});
export const payment = (id) => ({
  type: PAYMENT,
  payload: id,
});
export const address = (id) => ({
  type: ADDRESS,
  payload: id,
});
