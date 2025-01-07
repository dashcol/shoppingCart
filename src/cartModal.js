import { useValue } from "./context";

export default function CartModal() {
  const { setCart, cart, handleReset } = useValue();

  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        <span style={styles.clearButton} onClick={handleReset}>
          clear
        </span>
        <span style={styles.closeButton} onClick={() => setCart(false)}>
          close
        </span>
        {cart.map((item) => (
          <div key={item.id} style={styles.item}>
            <span style={styles.itemName}>{item.name}</span>
            <span style={styles.itemQty}>x{item.qty}</span>
            <span style={styles.itemPrice}>&#8377;{item.price}</span>
          </div>
        ))}
        <div style={styles.totalContainer}>
          <h1 style={styles.totalLabel}>Total:</h1>
          <h1 style={styles.totalPrice}>
            &#8377;{cart.reduce((acc, item) => acc + item.price * item.qty, 0)}
          </h1>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Slightly visible background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000, // Ensures it appears on top of other elements
  },
  container: {
    position: "relative",
    width: "90%", // Adjusted to fit within the screen
    maxWidth: "500px", // Limits the width
    maxHeight: "80%", // Prevents overflow for very large carts
    backgroundColor: "#fff", // Adds a background color to make items visible
    borderRadius: "8px",
    overflowY: "auto", // Allows scrolling for longer content
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "40px 20px 20px", // Adds space for the buttons at the top
    display: "flex",
    flexDirection: "column",
  },
  clearButton: {
    position: "absolute",
    top: "10px",
    left: "10px",
    color: "black",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "20px", // Adds spacing below the button
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    color: "black",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "20px", // Adds spacing below the button
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    borderBottom: "1px solid #e9ecef",
    marginBottom: "10px", // Adds space between items
  },
  itemName: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#495057",
    flex: 2,
  },
  itemQty: {
    fontSize: "14px",
    color: "#868e96",
    textAlign: "center",
    flex: 1,
  },
  itemPrice: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#212529",
    textAlign: "right",
    flex: 1,
  },
  totalContainer: {
    marginTop: "auto", // Pushes the total to the bottom of the modal
    padding: "20px",
    borderTop: "1px solid #e9ecef",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalLabel: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#495057",
  },
  totalPrice: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#212529",
  },
};
