import React, { createContext, useState } from "react";

let incrementId = 0;

export type Status = "todo" | "in_progress" | "done";

export interface SetStatusProps {
  id?: number;
  statusToChange: Status;
}

export interface TodoProps {
  id?: number;
  name: string;
  status: Status;
}

export type TodoContextType = {
  todoList: TodoProps[];
  setTodo: (Todo: TodoProps) => void;
  setStatus: ({ id, statusToChange }: SetStatusProps) => void;
};

const contextDefault: TodoContextType = {
  todoList: [],
  setTodo: () => {},
  setStatus: () => {},
};

export const TodosContext = createContext<TodoContextType>(contextDefault);

const TodosProvider: React.FC = ({ children }) => {
  const [todoList, setTodos] = useState<TodoProps[]>(contextDefault.todoList);

  const setTodo = ({ name, status }: TodoProps) =>
    setTodos((todos) => [...todos, { id: incrementId++, name, status }]);

  const setStatus = ({ id, statusToChange }: SetStatusProps) => {
    const newTodoList = todoList.map((item) =>
      item.id === id ? { ...item, status: statusToChange } : item
    );
    setTodos(newTodoList);
  };

  return (
    <TodosContext.Provider
      value={{
        todoList,
        setTodo,
        setStatus,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
