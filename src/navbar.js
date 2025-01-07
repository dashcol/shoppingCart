import React from "react";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderBottom: "2px solid #e9ecef",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#343a40",
    margin: 0,
  },
  cartIcon: {
    width: "32px",
    height: "32px",
    cursor: "pointer",
  },
};

export default function Nav() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>ShopingCart</h1>
      <span>
        <img
          src="https://cdn-icons-png.flaticon.com/128/3953/3953226.png"
          alt="Cart Icon"
          style={styles.cartIcon}
        />
      </span>
    </div>
  );
}
