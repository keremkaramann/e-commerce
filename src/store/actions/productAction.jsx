import { API } from "../../endpoint/instance";

export const NOT_FETCHED = "NOT_FETCHED";
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const FAILED = "FAILED";
export const CATID = "CATID";

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
export const fetchCategoriId = (id) => ({
  type: CATID,
  payload: id,
});
export const fetchProducts =
  (category, filter, sort, offset, limit = 27) =>
  (dispatch) => {
    dispatch(fetching(FETCHING));
    const queryParams = {
      category,
      filter,
      sort,
      limit,
      offset,
    };
    const filteredParams = Object.fromEntries(
      Object.entries(queryParams).filter(
        ([_, value]) => value !== undefined && value !== null
      )
    );

    if (category) {
      dispatch(fetchCategoriId(category));
    }

    const hasParams = Object.keys(filteredParams).length > 0;
    let productsEndpoint = "products";
    if (hasParams) {
      const queryString = new URLSearchParams(filteredParams).toString();
      productsEndpoint += `?${queryString}`;
    }

    console.log(productsEndpoint);
    API.get(productsEndpoint)
      .then((res) => {
        dispatch(fetched(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(failed(FAILED));
      });
  };
export const fetchProductById = (id) => (dispatch) => {
  dispatch(fetching(id));

  API.get(`products/${id}`)
    .then((res) => {
      dispatch(fetched(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(failed(id));
    });
};
