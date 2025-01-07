import Items from "./items";
import Nav from "./navbar";
import Total from "./total";
import CardContext from "./context";

function App() {
  return (
    <>
      <Nav />
      <CardContext>
        <Total />
        <Items />
      </CardContext>
    </>
  );
}

export default App;
