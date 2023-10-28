import {
  NOT_FETCHED,
  FETCHING,
  FETCHED,
  FAILED,
} from "../actions/productAction";

const productInitialState = {
  productList: [],
  totalProductCount: 0,
  pageCount: 1120,
  activePage: 0,
  fetchState: NOT_FETCHED,
};

const productReducer = (state = productInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
