const userState = {
  name: "Sayeem",
  age: 27
};

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      };
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload
      };
      break;
  }
  return state;
};
export default userReducer;
