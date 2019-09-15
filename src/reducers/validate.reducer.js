import * as actions from "../actions";

const initValues = {
  fetchState: "",
  validate: {}
};

export default (validate = initValues, action) => {
  switch (action.type) {
    case actions.CLEAR_VALIDATION:
      return {};
    case actions.VALIDATE_LOADING:
      return { fetchState: "Loading", ...validate };
    case actions.ADD_VALIDATE_SUCCESS:
      return { fetchState: "Add Success", validate: action.payload };
    case actions.EDIT_VALIDATE_SUCCESS:
      return { fetchState: "Edit Success", validate: action.payload };
    case actions.ADD_VALIDATE_ERROR:
      return { fetchState: "Add Error", validate: action.payload };
    case actions.EDIT_VALIDATE_ERROR:
      return { fetchState: "Edit Error", validate: action.payload };
    default:
      return validate;
  }
};
