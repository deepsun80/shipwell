const styles = {
  root: {
    fontFamily: "Roboto, sans-serif",
    color: "#3d3d3d"
  },
  heading: {
    textAlign: "center"
  },
  subHeading: {
    color: "#525252"
  },
  forms: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "70%",
    margin: "0 auto 50px"
  },
  label: {
    color: "#666666"
  },
  input: {
    width: "100%",
    borderRadius: 5,
    height: 20
  },
  validation: {
    color: "red",
    fontSize: 16
  },
  buttonSubmit: {
    background: "#2e6ad0",
    padding: "5px 30px",
    fontSize: 16,
    color: "#fff",
    borderRadius: 5,
    cursor: "pointer"
  },
  buttonCancel: {
    background: "#1f8e22",
    padding: "5px 30px",
    fontSize: 16,
    color: "#fff",
    borderRadius: 5,
    cursor: "pointer"
  },
  buttonError: {
    opacity: 0.5,
    background: "#a4a4a4",
    padding: "5px 30px",
    fontSize: 16,
    color: "#fff",
    borderRadius: 5
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between"
  },
  table: {
    borderCollapse: "collapse",
    width: "90vw",
    margin: "auto"
  },
  th: {
    color: "#666666",
    fontWeight: 300,
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: 5
  },
  td: {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: 10
  },
  icon: {
    color: "#2e6ad0",
    cursor: "pointer"
  },
  iconDisabled: {
    color: "#666666",
    opacity: "0.5"
  },
  checkBox: {
    width: 20,
    height: 20
  }
};

export default styles;
