import Text from "../Text/Text";
import AddIcon from "../icons/AddIcon";
import MinusIcon from "../icons/MinusIcon";
import style from "./Counter.module.css";

const Counter = (props) => {
  return (
    <div className={style.wrapper}>
      <Text>
        {props.count} {props.text}
      </Text>
      <nav>
        <MinusIcon onClick={props.onDecrement} />
        <AddIcon onClick={props.onIncrement} />
      </nav>
    </div>
  );
};

export default Counter;
