import { ADD_CART, PAYMENT, ADDRESS } from "../actions/shoppingCartAction";

const shoppingInitialState = {
  cart: [],
  payment: {},
  address: {},
};

const shoppingCartReducer = (state = shoppingInitialState, action) => {
  switch (action.type) {
    case ADD_CART:
      if (action.payload === undefined) {
        return { ...state };
      }

      if (action.payload.id === cart.id) {
        return {
          ...state,
          cart: [...state.cart, { count: 1, checked: true, ...action.payload }],
        };
      }
    default:
      return state;
  }
};

export default shoppingCartReducer;
