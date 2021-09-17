import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  INCREASE_BY_TWO_COUNTER,
  RESET,
} from "./actionTypes";

function reducer(state, action) {
  switch (action.type) {
    case INCREASE_COUNTER:
      state.counter = state.counter + action.payload;
      return { ...state };
    case DECREASE_COUNTER:
      state.counter > 0
        ? (state.counter = state.counter - action.payload)
        : alert("0 dan kücük olamaz");
      return { ...state };
    case INCREASE_BY_TWO_COUNTER:
      state.counter = state.counter + action.payload;
      return { ...state };
    case RESET:
      state.counter = 0;
      return { ...state };

    default:
      return state;
  }
}

export default reducer;
