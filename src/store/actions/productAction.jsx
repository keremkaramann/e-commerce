import { API } from "../../endpoint/instance";

export const NOT_FETCHED = "NOT_FETCHED";
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const FAILED = "FAILED";

export const notFetched = (id) => ({
  type: NOT_FETCHED,
  payload: id,
});
export const fetching = (id) => ({
  type: FETCHING,
  payload: id,
});
export const fetched = (id) => ({
  type: FETCHED,
  payload: id,
});
export const failed = (id) => ({
  type: FAILED,
  payload: id,
});

export const fetchProducts = (category, filter, sort) => (dispatch) => {
  dispatch(fetching(FETCHING));
  const queryParams = {
    category,
    filter,
    sort,
  };

  const currentSort = queryParams.sort;

  if (currentSort && currentSort !== sort) {
    const updateSort = sort;
  }
  const queryString = new URLSearchParams(queryParams).toString();
  const productsEndpoint = `products?${queryString}`;

  API.get("products")
    .then((res) => {
      dispatch(fetched(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(failed(FAILED));
    });
};
