import * as actions from "../actions";

export default (address = {}, action) => {
  switch (action.type) {
    case actions.CLEAR_ADDRESS:
      return {};
    case actions.SELECT_ADDRESS:
      return action.payload;
    default:
      return address;
  }
};
