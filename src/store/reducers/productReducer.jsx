import {
  NOT_FETCHED,
  FETCHING,
  FETCHED,
  FAILED,
} from "../actions/productAction";

const productInitialState = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 0,
  fetchState: "",
};

const productReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case FETCHED:
      return { ...state, productList: action.payload, fetchState: action.type };
    case FETCHING:
      return { ...state, fetchState: action.payload };
    case FAILED:
      return { ...state, fetchState: action.payload };
    default:
      return state;
  }
};

export default productReducer;
