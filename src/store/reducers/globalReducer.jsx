import {
  ROLES,
  CATEGORIES,
  SET_THEME,
  SET_LANGUAGE,
} from "../actions/globalRedAction";

const globalInitialState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
};

const globalReducer = (state = globalInitialState, action) => {
  switch (action.type) {
    case ROLES:
      return { ...state, roles: action.payload };
    default:
      return state;
  }
};

export default globalReducer;
