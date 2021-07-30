import { Todo } from "./components/Todo";
import TodosProvider from "./context/TodoContext";

export function ChallengeComponent() {
  return (
    <TodosProvider>
      <Todo />
    </TodosProvider>
  );
}
