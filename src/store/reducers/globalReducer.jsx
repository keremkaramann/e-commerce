const globalInitialState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
};
const globalReducer = (state = globalInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default globalReducer;
