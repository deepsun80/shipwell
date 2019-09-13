import React from "react";

const App = ({ title }) => {
  const [stopName, setStopName] = React.useState("");
  const [stopAddress, setStopAddress] = React.useState("");
  const [error, setError] = React.useState({
    errorState: false,
    errorName: "",
    errorAddress: ""
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(stopName, stopAddress);
  }

  function handleNameChange(event) {
    setStopName(event.target.value);
  }

  function handleAddressChange(event) {
    setStopAddress(event.target.value);
  }

  React.useEffect(() => {
    if (stopName === "") setError({ errorName: "Required", ...error });
    // if (stopAddress === "") setError({ errorAddress: "Required", ...error });
    // if (stopAddress.length <= 3)
    //   setError({ errorAddress: "Must be at least 3 characters", ...error });

    // if (stopName !== "" && stopAddress !== "" && stopAddress.length > 3)
    //   setError({ errorState: true, ...error });
  });

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Stop Name:
          <input type="text" value={stopName} onChange={handleNameChange} />
        </label>
        <label>
          Stop Address:
          <input
            type="text"
            value={stopAddress}
            onChange={handleAddressChange}
          />
        </label>
        <input type="submit" value="Submit" disabled={!error.errorState} />
      </form>
    </React.Fragment>
  );
};

export default App;
