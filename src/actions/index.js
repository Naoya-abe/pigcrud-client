import { SIGN_IN, SIGN_OUT } from "./types";

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
