import "./App.css";
import Counter from "./components/Counter/Counter";
import SingleLight from "./components/SingleLight/SingleLight";
import Text from "./components/Text/Text";

function App() {
  return (
    <div>
      <nav className="nav">
        <Text>0 bulbs</Text>
        <Counter text={"rows"} count={"0"} />
        <Counter text={"columns"} count={"0"} />
      </nav>
      <div>
        <SingleLight />
      </div>
    </div>
  );
}

export default App;
