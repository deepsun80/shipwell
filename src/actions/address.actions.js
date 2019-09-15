export const CLEAR_ADDRESS = "CLEAR_ADDRESS";
export const ADD_ADDRESS = "ADD_ADDRESS";
export const REMOVE_ADDRESS = "REMOVE_ADDRESS";
export const SELECT_ADDRESS = "SELECT_ADDRESS";
export const EDIT_ADDRESS = "EDIT_ADDRESS";
export const COMPLETE_ADDRESS = "COMPLETE_ADDRESS";

export const clearAddress = () => ({
  type: CLEAR_ADDRESS
});

export const addAddress = address => ({
  type: ADD_ADDRESS,
  payload: address
});

export const removeAddress = id => ({
  type: REMOVE_ADDRESS,
  payload: id
});

export const selectAddress = id => ({
  type: SELECT_ADDRESS,
  payload: id
});

export const editAddress = address => ({
  type: EDIT_ADDRESS,
  payload: address
});

export const completeAddress = id => ({
  type: COMPLETE_ADDRESS,
  payload: id
});
