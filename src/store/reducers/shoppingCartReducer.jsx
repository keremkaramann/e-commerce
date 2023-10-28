const shoppingInitialState = {
  cart: [{}],
  payment: {},
  address: {},
};
const shoppingCartReducer = (state = shoppingInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shoppingCartReducer;
