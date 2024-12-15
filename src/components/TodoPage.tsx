import { FunctionComponent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { Todo } from "Todo";
import Footer from "./Footer";

const TodoPage: FunctionComponent = () => {
  const [todos, setTodos] = useState([] as Todo[]);

  const handleAddTodo = (text: string): void => {
    const id = uuidv4();
    const todo: Todo = { id, text, complete: false };

    setTodos([...todos, todo]);
  };

  const handleRemoveTodo = (id: string): void => {
    const updatedTodos: Todo[] = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };

  const handleClearCompleteTodos = (): void => {
    const updatedTodos: Todo[] = todos.filter((todo) => !todo.complete);

    setTodos(updatedTodos);
  };

  const handleToggleTodo = (selectedTodo: Todo): void => {
    const updatedTodos: Todo[] = todos.map((todo) => {
      if (todo.id === selectedTodo.id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });

    setTodos(
      [...updatedTodos].sort((a, b) =>
        a.complete === b.complete ? 0 : a.complete ? 1 : -1
      )
    );
  };

  return (
    <div>
      <div className="d-flex align-items-center mb-3 gap-3">
        <TodoInput onSubmit={handleAddTodo} />
        <button
          className="btn btn-primary mb-3"
          onClick={handleClearCompleteTodos}
        >
          clear
        </button>
      </div>

      <TodoList
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onRemoveTodo={handleRemoveTodo}
      />

      <Footer />
    </div>
  );
};

export default TodoPage;
