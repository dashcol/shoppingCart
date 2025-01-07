import React from "react";
import { useValue } from "./context";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "300px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    border: "1px solid #e9ecef",
  },
  itemName: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#495057",
    margin: "10px 0",
  },
  price: {
    fontSize: "1rem",
    color: "#6c757d",
    margin: "5px 0",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
    marginTop: "15px",
  },
  button: {
    padding: "8px 12px",
    fontSize: "0.9rem",
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  buttonRemove: {
    backgroundColor: "#dc3545",
  },
};

export default function ItemsCard({ id, name, price }) {
  const { handleAdd, handleDel } = useValue();

  return (
    <div style={styles.container}>
      <h4 style={styles.itemName}>{name}</h4>
      <p style={styles.price}>&#8377;{price}</p>
      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={() => {
            handleAdd({ id, name, price });
          }}
        >
          ADD
        </button>
        <button
          style={{ ...styles.button, ...styles.buttonRemove }}
          onClick={() => {
            handleDel(id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
