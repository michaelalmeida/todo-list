import { TodoProps, SetStatusProps, Status } from "../../context/TodoContext";
import { Item, Arrow, Text } from "./Todo.styled";

interface TodoItemProps extends TodoProps {
  arrowAction: ({ id, statusToChange }: SetStatusProps) => void;
  nextStatus?: Status | undefined;
  previousStatus?: Status | undefined;
}

const TodoItem = (item: TodoItemProps): JSX.Element => {
  const previousStateHandler = () => {
    if (typeof item.previousStatus !== "undefined") {
      item.arrowAction({
        id: item.id,
        statusToChange: item.previousStatus,
      });
    }
  };

  const nextStateHandler = () => {
    if (typeof item.nextStatus !== "undefined") {
      item.arrowAction({
        id: item.id,
        statusToChange: item.nextStatus,
      });
    }
  };

  return (
    <Item>
      <Arrow
        left
        onClick={previousStateHandler}
        disabled={typeof item.previousStatus === "undefined"}
      >
        🡨
      </Arrow>
      <Text> {item.name}</Text>
      <Arrow
        onClick={nextStateHandler}
        disabled={typeof item.nextStatus === "undefined"}
      >
        🡪
      </Arrow>
    </Item>
  );
};

export default TodoItem;
