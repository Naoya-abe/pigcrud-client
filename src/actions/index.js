import items from "../apis/items";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_ITEM,
  FETCH_ITEMS,
  FETCH_ITEM,
  DELETE_ITEM,
  EDIT_ITEM
} from "./types";

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

export const fetchStreams = () => async dispatch => {
  const response = await items.get("/items");
  dispatch({ type: FETCH_ITEMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await items.get(`/items/${id}`);
  dispatch({ type: FETCH_ITEM, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await items.put(`/items/${id}`, formValues);
  dispatch({ type: EDIT_ITEM, payload: response.data });
};

export const deleteStream = id => async dispatch => {
  await items.delete(`/items/${id}`);
  dispatch({ type: DELETE_ITEM, payload: id });
};
