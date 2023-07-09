import React, { useState } from "react";
import Text from "../Text/Text";
import AddIcon from "../icons/AddIcon";
import MinusIcon from "../icons/MinusIcon";
import style from "./Counter.module.css";

const Counter = (props) => {
  const [value, setValue] = useState(0);

  const handleDecrement = () => {
    if (value <= 0) {
      return;
    }
    setValue(value - 1);
  };

  const handleIncrement = () => {
    setValue(value + 1);
  };

  return (
    <div className={style.wrapper}>
      <Text>
        {value} {props.text}
      </Text>
      <nav>
        <MinusIcon onClick={handleDecrement} />
        <AddIcon onClick={handleIncrement} />
      </nav>
    </div>
  );
};

export default Counter;
