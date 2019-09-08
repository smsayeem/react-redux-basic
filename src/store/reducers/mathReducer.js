const mathState = {
  result: 100,
  lastValue: []
};
//reducer is just a method which takes an state and action in parameter and return state
const mathReducer = (state = mathState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + Number(action.payload),
        lastValue: [...state.lastValue, action.payload]
      };
      break;
    case "SUBTRACT":
      state = {
        ...state,
        result: state.result - Number(action.payload),
        lastValue: [...state.lastValue, action.payload]
      };
      break;
  }
  return state;
};
export default mathReducer;
