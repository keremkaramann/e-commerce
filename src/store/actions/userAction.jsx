export const USER = "USER";

export const user = (id) => ({
  type: USER,
  payload: id,
});
