import { useState, useContext } from "react";
import { TodosContext } from "../../context/TodoContext";
import { TodoWrapper } from "./Todo.styled";
import TodoColumn from "./TodoColumn";

function Todo(): JSX.Element {
  const [value, setValue] = useState("");
  const { todoList, setTodo, setStatus } = useContext(TodosContext);

  const inputChangeHander = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const pressKeyHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") addTodoHandler();
  };

  const addTodoHandler = () => {
    setTodo({ name: value, status: "todo" });
    setValue("");
  };

  return (
    <>
      <TodoWrapper>
        <TodoColumn
          title="To do"
          items={todoList.filter((todo) => todo.status === "todo")}
          arrowAction={setStatus}
          nextStatus="in_progress"
        />
        <TodoColumn
          title="In Progress"
          items={todoList.filter((todo) => todo.status === "in_progress")}
          arrowAction={setStatus}
          nextStatus="done"
          previousStatus="todo"
        />
        <TodoColumn
          title="Done"
          items={todoList.filter((todo) => todo.status === "done")}
          arrowAction={setStatus}
          previousStatus="in_progress"
        />
      </TodoWrapper>
      <input
        value={value}
        onChange={inputChangeHander}
        onKeyDown={pressKeyHandler}
      />
      <button onClick={addTodoHandler}>+</button>
    </>
  );
}

export { Todo };
