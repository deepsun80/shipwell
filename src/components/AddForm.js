import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAddress, addValidate, clearValidation } from "../actions";
import styles from "../styles";

const EditForm = () => {
  const [stopName, setStopName] = React.useState("");
  const [stopAddress, setStopAddress] = React.useState("");
  const [error, setError] = React.useState(false);
  const [nameError, setNameError] = React.useState("");
  const [addressError, setAddressError] = React.useState("");
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

    if (validation.fetchState === "Add Success") {
      dispatch(
        addAddress({ name: stopName, address: stopAddress, complete: false })
      );
      dispatch(clearValidation());
    }
  });

  function handleNameChange(event) {
    setStopName(event.target.value);
  }

  function handleAddressChange(event) {
    setStopAddress(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addValidate({ formatted_address: stopAddress }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={styles.subHeading}>Add Address</h2>
      <label style={styles.label}>
        Stop Name:
        <input
          type="text"
          value={stopName}
          onChange={handleNameChange}
          style={styles.input}
        />
      </label>
      <p style={styles.validation}>{nameError}</p>
      <label style={styles.label}>
        Stop Address:
        <input
          type="text"
          value={stopAddress}
          onChange={handleAddressChange}
          style={styles.input}
        />
      </label>
      <p style={styles.validation}>{addressError}</p>
      {validation.fetchState === "Add Error" && addressError === "" && (
        <p style={styles.validation}>Please enter a valid address</p>
      )}
      <input
        type="submit"
        value="Submit"
        disabled={!error}
        style={error ? styles.buttonSubmit : styles.buttonError}
      />
    </form>
  );
};

export default EditForm;
