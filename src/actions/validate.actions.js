export const CLEAR_VALIDATION = "CLEAR_VALIDATION";
export const VALIDATE_LOADING = "ADD_VALIDATE_LOADING";
export const ADD_VALIDATE_SUCCESS = "ADD_VALIDATE_SUCCESS";
export const ADD_VALIDATE_ERROR = "ADD_VALIDATE_ERROR";
export const EDIT_VALIDATE_SUCCESS = "EDIT_VALIDATE_SUCCESS";
export const EDIT_VALIDATE_ERROR = "EDIT_VALIDATE_ERROR";

import axios from "axios";

export const clearValidation = () => ({
  type: CLEAR_VALIDATION
});

export const addValidate = address => async dispatch => {
  dispatch({
    type: VALIDATE_LOADING
  });
  try {
    const result = await axios.post(
      "https://dev-api.shipwell.com/v2/locations/addresses/validate/",
      address
    );
    dispatch({
      type: ADD_VALIDATE_SUCCESS,
      payload: result
    });
  } catch (error) {
    dispatch({
      type: ADD_VALIDATE_ERROR,
      payload: error
    });
  }
};

export const editValidate = address => async dispatch => {
  dispatch({
    type: VALIDATE_LOADING
  });
  try {
    const result = await axios.post(
      "https://dev-api.shipwell.com/v2/locations/addresses/validate/",
      address
    );
    dispatch({
      type: EDIT_VALIDATE_SUCCESS,
      payload: result
    });
  } catch (error) {
    dispatch({
      type: EDIT_VALIDATE_ERROR,
      payload: error
    });
  }
};
