import React from "react";

const styles = (columns) => {
  return {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 109px)`,
    columnGap: "20px",
    rowGap: "20px",
  };
};

const Grid = (props) => (
  <div style={styles(props.columns)}>{props.children}</div>
);

export default Grid;
