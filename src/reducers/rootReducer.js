import { data } from "../data";

const initialState = {
  gifData: data,
  loading: false,
  error: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
