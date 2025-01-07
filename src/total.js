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
  heading: {
    fontSize: "1.25rem",
    color: "#495057",
    margin: "10px 0",
    fontWeight: "bold",
  },
};

export default function Total() {
  const { count, total, handleReset, handleCart } = useValue();

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Total: &#8377;{total}</h3>
      <h3 style={styles.heading}>Items:{count}</h3>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleCart}>Cart</button>
    </div>
  );
}
