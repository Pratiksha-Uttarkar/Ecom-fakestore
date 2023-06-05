import {
  FETCH_DATA_REQUESTED,
  FETCH_DATA_FULFILLED,
  FETCH_DATA_REJECTED,
} from "../action/actionType";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  checkoutData: [],
};

export const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CHECKOUT_DATA":
      return {
        ...state,
        checkoutData: action.payload,
      };
      case FETCH_DATA_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_DATA_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null
      };
    case FETCH_DATA_REJECTED:
      return {
        ...state,
        isLoading: false,
        data: null,
        error: action.payload
      };
    default:
      return state;
  }
};
