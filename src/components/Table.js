import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAddress, selectAddress, completeAddress } from "../actions";
import styles from "../styles";

const Table = () => {
  const addresses = useSelector(state => state.addresses);
  const dispatch = useDispatch();

  return (
    <table style={styles.table}>
      <tr style={styles.tr}>
        <th style={styles.th}>Stop Number</th>
        <th style={styles.th}>Name</th>
        <th style={styles.th}>Address</th>
        <th style={styles.th}>Edit</th>
        <th style={styles.th}>Remove</th>
        <th style={styles.th}>Completed</th>
      </tr>
      {addresses.map((address, key) => (
        <tr style={styles.tr} key={key}>
          <td style={styles.td}>{key + 1}</td>
          <td style={styles.td}>{address.name}</td>
          <td style={styles.td}>{address.address}</td>
          <td style={styles.td}>
            {!address.complete ? (
              <i
                className="fas fa-pen"
                aria-hidden="true"
                onClick={() =>
                  dispatch(
                    selectAddress({
                      name: address.name,
                      address: address.address,
                      id: key
                    })
                  )
                }
                style={styles.icon}
              ></i>
            ) : (
              <i
                className="fas fa-pen"
                aria-hidden="true"
                style={styles.iconDisabled}
              ></i>
            )}
          </td>
          <td style={styles.td}>
            {!address.complete ? (
              <i
                className="fa fa-trash"
                aria-hidden="true"
                onClick={() => dispatch(removeAddress(key))}
                style={styles.icon}
              ></i>
            ) : (
              <i
                className="fa fa-trash"
                aria-hidden="true"
                style={styles.iconDisabled}
              ></i>
            )}
          </td>
          <td style={styles.td}>
            <form>
              <input
                name={key}
                type="checkbox"
                checked={address.complete}
                onChange={() => dispatch(completeAddress(key))}
                style={styles.checkBox}
              />
            </form>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
