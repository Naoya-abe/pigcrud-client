import items from "../apis/items";
import { SIGN_IN, SIGN_OUT, CREATE_ITEM } from "./types";

export const signIn = () => {
  return {
    type: SIGN_IN,
    payload: true
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
    payload: false
  };
};

export const createItems = formValues => async dispatch => {
  const response = await items.post("/items", formValues);
  dispatch({ type: CREATE_ITEM, payload: response.data });
};
