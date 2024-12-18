import { useState, useEffect } from "react";
import { Todo } from "features/todos/types/Todo";
import { v4 as uuidv4 } from "uuid";

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const getTodosByListName = (listName: string): Todo[] => {
    if (listName === "All") return todos;
    return todos.filter((todo) => todo.listName === listName);
  };

  const addTodo = (text: string, listName: string): void => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), text, complete: false, listName },
    ]);
  };

  const removeTodo = (id: string): void => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const clearCompleteTodos = (): void => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.complete));
  };

  const toggleTodo = (selectedTodo: Todo): void => {
    setTodos((prevTodos) =>
      prevTodos
        .map((todo) =>
          todo.id === selectedTodo.id
            ? { ...todo, complete: !todo.complete }
            : todo
        )
        .sort((a, b) =>
          a.complete === b.complete ? 0 : a.complete ? 1 : -1
        )
    );
  };

  const editTodo = (id: string, newText: string): void => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return {
    todos,
    addTodo,
    removeTodo,
    clearCompleteTodos,
    toggleTodo,
    editTodo,
    getTodosByListName,
  };
};

export default useTodos;
