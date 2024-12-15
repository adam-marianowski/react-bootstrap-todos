import { useState } from "react";
import { Todo } from "features/todos/types/Todo";
import { v4 as uuidv4 } from "uuid";

const useTodos = () => {
  const [todos, setTodos] = useState([] as Todo[]);

  const addTodo = (text: string): void => {
    const id = uuidv4();
    const todo: Todo = { id, text, complete: false };

    setTodos([...todos, todo]);
  };

  const removeTodo = (id: string): void => {
    const updatedTodos: Todo[] = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };

  const clearCompleteTodos = (): void => {
    const updatedTodos: Todo[] = todos.filter((todo) => !todo.complete);

    setTodos(updatedTodos);
  };

  const toggleTodo = (selectedTodo: Todo): void => {
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

  return { todos, addTodo, removeTodo, clearCompleteTodos, toggleTodo };
};

export default useTodos;
