import * as actions from "../actions";

export default (addresses = [], action) => {
  switch (action.type) {
    case actions.ADD_ADDRESS:
      let newAddress = [...addresses, action.payload];
      return newAddress;
    case actions.REMOVE_ADDRESS:
      if (action.payload === -1) {
        return addresses;
      }
      return [
        ...addresses.slice(0, action.payload),
        ...addresses.slice(action.payload + 1)
      ];
    case actions.EDIT_ADDRESS:
      newAddress = addresses.slice(0);
      newAddress[action.payload.id] = action.payload.address;
      return newAddress;
    case actions.COMPLETE_ADDRESS:
      newAddress = addresses.slice(0);
      if (newAddress[action.payload].complete === false) {
        newAddress[action.payload].complete = true;
      } else newAddress[action.payload].complete = false;
      return newAddress;
    default:
      return addresses;
  }
};
