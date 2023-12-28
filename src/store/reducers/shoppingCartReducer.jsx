import {
  ADD_CART,
  PAYMENT,
  ADDRESS,
  REMOVE_CART,
  INCREASE_COUNT,
  DECREASE_COUNT,
} from "../actions/shoppingCartAction";

const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

const shoppingInitialState = {
  cart: storedCart,
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
        localStorage.setItem("cart", JSON.stringify(upDateCart));
        return {
          ...state,
          cart: upDateCart,
        };
      } else {
        const newCart = [
          ...state.cart,
          {
            count: 1,
            checked: true,
            product: { ...action.payload },
          },
        ];
        localStorage.setItem("cart", JSON.stringify(newCart));
        return {
          ...state,
          cart: newCart,
        };
      }
    case REMOVE_CART:
      const updatedCart = state.cart.filter(
        (f) => f.product.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    case INCREASE_COUNT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload
            ? { ...item, count: item.count < 10 ? item.count + 1 : item.count }
            : item
        ),
      };

    case DECREASE_COUNT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload
            ? { ...item, count: item.count > 1 ? item.count - 1 : 1 }
            : item
        ),
      };
    case ADDRESS:
      return {
        ...state,
        address: { ...state.address, ...action.payload },
      };
    default:
      return state;
  }
};

export default shoppingCartReducer;
