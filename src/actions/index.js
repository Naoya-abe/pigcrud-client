import items from "../apis/items";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_ITEM,
  FETCH_ITEMS,
  FETCH_ITEM,
  DELETE_ITEM,
  EDIT_ITEM
} from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createItem = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await items.post("/items", { ...formValues, userId });
  dispatch({ type: CREATE_ITEM, payload: response.data });
  history.push("/");
};

export const fetchItems = () => async dispatch => {
  const response = await items.get("/items");
  dispatch({ type: FETCH_ITEMS, payload: response.data });
};

export const fetchItem = id => async dispatch => {
  const response = await items.get(`/items/${id}`);
  dispatch({ type: FETCH_ITEM, payload: response.data });
};

export const editItem = (id, formValues) => async dispatch => {
  // const { userId } = getState().auth;
  const response = await items.patch(`/items/${id}`, formValues);
  dispatch({ type: EDIT_ITEM, payload: response.data });
  history.push("/");
};

export const deleteItem = id => async dispatch => {
  await items.delete(`/items/${id}`);
  dispatch({ type: DELETE_ITEM, payload: id });
};
