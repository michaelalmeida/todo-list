import { TodoProps, SetStatusProps, Status } from "../../context/TodoContext";
import { Column, Title } from "./Todo.styled";
import TodoItem from "./TodoItem";

interface TodoColumnProps {
  items: TodoProps[];
  title: string;
  arrowAction: ({ id, statusToChange }: SetStatusProps) => void;
  nextStatus?: Status | undefined;
  previousStatus?: Status | undefined;
}

const TodoColumn = ({
  items,
  title,
  arrowAction,
  nextStatus,
  previousStatus,
}: TodoColumnProps): JSX.Element => (
  <Column>
    <Title>{title}</Title>
    {items.map((todo) => (
      <TodoItem
        key={todo.id}
        name={todo.name}
        status={todo.status}
        id={todo.id}
        arrowAction={arrowAction}
        nextStatus={nextStatus}
        previousStatus={previousStatus}
      />
    ))}
  </Column>
);
export default TodoColumn;
