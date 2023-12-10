export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";
export const PAYMENT = "PAYMENT";
export const ADDRESS = "ADDRESS";

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
export const address = (id) => ({
  type: ADDRESS,
  payload: id,
});
