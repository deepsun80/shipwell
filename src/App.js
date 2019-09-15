import React from "react";
import { useSelector } from "react-redux";
import { AddForm, EditForm, Table } from "./components";
import styles from "./styles";

const App = ({ title }) => {
  const selectedAddress = useSelector(state => state.selectedAddress);

  return (
    <div style={styles.root}>
      <h1 style={styles.heading}>{title}</h1>
      <div style={styles.forms}>
        <AddForm />
        {Object.getOwnPropertyNames(selectedAddress).length !== 0 && (
          <EditForm />
        )}
      </div>
      <Table />
    </div>
  );
};

export default App;
