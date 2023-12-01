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
      const existingProduct = state.cart.find(
        (item) => item.product.id === action.payload.id
      );
      if (existingProduct) {
        const upDateCart = state.cart.map((item) =>
          item.product.id === action.payload.id
            ? { ...item, count: item.count < 10 ? item.count + 1 : item.count }
            : item
        );
        return {
          ...state,
          cart: upDateCart,
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              count: 1,
              checked: true,
              product: { ...action.payload },
            },
          ],
        };
      }
    default:
      return state;
  }
};

export default shoppingCartReducer;
