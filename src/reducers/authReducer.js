import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: action.payload };
    default:
      return state;
  }
};
