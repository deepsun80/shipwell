import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearAddress,
  editAddress,
  editValidate,
  clearValidation
} from "../actions";
import styles from "../styles";

const EditForm = () => {
  const [stopName, setStopName] = React.useState("");
  const [stopAddress, setStopAddress] = React.useState("");
  const [initNameState, setNameInitState] = React.useState(false);
  const [initAddressState, setAddressInitState] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [nameError, setNameError] = React.useState("");
  const [addressError, setAddressError] = React.useState("");
  const selectedAddress = useSelector(state => state.selectedAddress);
  const validation = useSelector(state => state.validation);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (stopName === "") setNameError("Required");
    else setNameError("");

    if (stopAddress === "") setAddressError("Required");
    else if (stopAddress.length <= 2)
      setAddressError("Must be at least 3 characters");
    else setAddressError("");

    if (stopName !== "" && stopAddress !== "" && stopAddress.length > 2) {
      setError(true);
    } else setError(false);

    if (validation.fetchState === "Edit Success") {
      dispatch(
        editAddress({
          id: selectedAddress.id,
          address: { name: stopName, address: stopAddress }
        })
      );
      dispatch(clearValidation());
    }
  });

  function handleNameChange(event) {
    setStopName(event.target.value);
  }

  function handleNameBlur(event) {
    setNameInitState(true);
  }

  function handleAddressChange(event) {
    setStopAddress(event.target.value);
  }

  function handleAddressBlur(event) {
    setAddressInitState(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(editValidate({ formatted_address: stopAddress }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={styles.subHeading}>Edit Address {selectedAddress.id + 1}</h2>
      <label style={styles.label}>
        Stop Name:
        <input
          type="text"
          value={stopName}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          style={styles.input}
        />
      </label>
      <p style={styles.validation}>{initNameState && nameError}</p>
      <label style={styles.label}>
        Stop Address:
        <input
          type="text"
          value={stopAddress}
          onChange={handleAddressChange}
          onBlur={handleAddressBlur}
          style={styles.input}
        />
      </label>
      <p style={styles.validation}>{initAddressState && addressError}</p>
      {validation.fetchState === "Edit Error" && addressError === "" && (
        <p style={styles.validation}>Please enter a valid address</p>
      )}
      <div style={styles.buttonRow}>
        <input
          type="submit"
          value="Submit"
          disabled={!error}
          style={error ? styles.buttonSubmit : styles.buttonError}
        />
        <button
          onClick={() => dispatch(clearAddress())}
          style={styles.buttonCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditForm;
