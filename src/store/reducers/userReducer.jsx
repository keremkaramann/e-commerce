import { USER_ACT, LOGOUT } from "../actions/userAction";

const userInitialState = {
  user: {},
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case USER_ACT:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...userInitialState };
    default:
      return state;
  }
};

export default userReducer;
