import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../actions";

const initialState = {
  gifData: [],
  loading: false,
  error: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        gifData: action.payload,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
