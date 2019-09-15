import { combineReducers } from "redux";
import addressReducer from "./address.reducer";
import selectReducer from "./select.reducer";
import validateReducer from "./validate.reducer";

const rootReducer = combineReducers({
  addresses: addressReducer,
  selectedAddress: selectReducer,
  validation: validateReducer
});

export default rootReducer;
