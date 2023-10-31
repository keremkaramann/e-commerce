import { USER_ACT } from "../actions/userAction";

const userInitialState = {
  user: {},
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case USER_ACT:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;
