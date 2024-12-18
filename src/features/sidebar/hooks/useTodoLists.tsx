import { useState } from "react";
import { TodoList } from "../types/todoList";
import { defaultTodoLists } from "../utilities/constants";

const useTodoLists = () => {
  const [todoLists, setTodoLists] = useState<TodoList[]>(defaultTodoLists);

  const getTodoListByName = (listName: string) => {
    return todoLists.find((list) => list.name === listName);
  };

  const addTodoList = (todoList: TodoList) => {
    // ! temporary solution to limit the number of lists
    // ! this will be removed when proper styling is added
    // ! when there are more than 15 lists.
    // ! to extend the sidebar.
    if (todoLists.length >= 15) {
      window.alert("You can't have more than 15 lists");
      console.log("You can't have more than 15 lists");
      return;
    }
    setTodoLists((prev) => [...prev, todoList]);
  };

  return { todoLists, addTodoList, getTodoListByName };
};

export default useTodoLists;
