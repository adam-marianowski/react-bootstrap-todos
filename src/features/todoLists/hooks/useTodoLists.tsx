import { useState } from "react";
import { TodoList } from "../types/todoList";
import { defaultTodoLists } from "../utilities/constants";

const useTodoLists = () => {
  const [todoLists, setTodoLists] = useState<TodoList[]>(defaultTodoLists);

  const addTodoList = (todoList: TodoList) => {
    setTodoLists((prev) => [...prev, todoList]);
  };

  return { todoLists, addTodoList };
};

export default useTodoLists;
