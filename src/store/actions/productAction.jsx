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
  const filteredParams = Object.fromEntries(
    Object.entries(queryParams).filter(
      ([_, value]) => value !== undefined && value !== null
    )
  );
  const hasParams = Object.keys(filteredParams).length > 0;
  let productsEndpoint = "products";

  if (hasParams) {
    const queryString = new URLSearchParams(filteredParams).toString();
    productsEndpoint += `?${queryString}`;
  }

  API.get(productsEndpoint)
    .then((res) => {
      dispatch(fetched(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(failed(FAILED));
    });
};
