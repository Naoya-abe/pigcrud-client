export const signIn = () => {
  return {
    type: "SIGN_IN",
    payload: true
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
    payload: false
  };
};
