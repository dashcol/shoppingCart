import ItemsCard from "./itemsCard";
import data from "./itemsData";

export default function Items() {
  return (
    <div style={styles.itemsContainer}>
      {data.map((item) => (
        <ItemsCard
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}
const styles = {
  itemsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    margin: "20px",
  },
};
