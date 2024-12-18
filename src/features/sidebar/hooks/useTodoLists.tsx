import { useState } from "react";
import { TodoList } from "../types/todoList";
import { defaultTodoLists } from "../utilities/constants";

const useTodoLists = () => {
  const [todoLists, setTodoLists] = useState<TodoList[]>(defaultTodoLists);

  const addTodoList = (todoList: TodoList) => {
    // ! temporary solution to limit the number of lists
    // ! this will be removed when proper styling is added
    // ! when there are more than 15 lists.
    // ! to extend the sidebar.
    if (todoLists.length >= 15) {
      console.log("You can't have more than 15 lists");
    }
    setTodoLists((prev) => [...prev, todoList]);
  };

  return { todoLists, addTodoList };
};

export default useTodoLists;
