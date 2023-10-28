export const USER_ACT = "USER";

export const user = (id) => ({
  type: USER_ACT,
  payload: id,
});
