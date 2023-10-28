import { STORE_OWNERS } from "../actions/storeAction";

const storeInitialState = {
  storeOwners: [],
};

const storeReducer = (state = storeInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default storeReducer;
