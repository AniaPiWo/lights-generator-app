import "./App.css";
import React, { useState } from "react";
import Counter from "./components/Counter/Counter";
import SingleLight from "./components/SingleLight/SingleLight";
import Text from "./components/Text/Text";
import Grid from "./components/Grid/Grid";

function App() {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const totalLights = rows * columns;
  const lights = Array.from({ length: totalLights });

  const handleDecrementRows = () => {
    if (rows <= 0) {
      return;
    }
    setRows(rows - 1);
  };

  const handleIncrementRows = () => {
    setRows(rows + 1);
  };

  const handleDecrementColumns = () => {
    if (columns <= 0) {
      return;
    }
    setColumns(columns - 1);
  };

  const handleIncrementColumns = () => {
    if (columns >= 9) {
      return;
    }
    setColumns(columns + 1);
  };

  return (
    <div>
      <nav className="nav">
        <Text>{totalLights} bulbs</Text>
        <Counter
          text={"rows"}
          count={rows}
          onIncrement={handleIncrementRows}
          onDecrement={handleDecrementRows}
        />
        <Counter
          text={"columns"}
          count={columns}
          onIncrement={handleIncrementColumns}
          onDecrement={handleDecrementColumns}
        />
      </nav>
      <Grid columns={columns}>
        {lights.map((value, index) => {
          return <SingleLight key={index} />;
        })}
      </Grid>
    </div>
  );
}

export default App;
