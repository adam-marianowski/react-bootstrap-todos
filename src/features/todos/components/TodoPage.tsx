import { FunctionComponent } from "react";
import TodoCreateForm from "./TodoCreateForm";
import TodoList from "./TodoList";
import useTodos from "../hooks/useTodos";
import { TODOS } from "utilities/localization";
import { Params, useParams } from "react-router-dom";

const TodoPage: FunctionComponent = () => {
  const params: Params<string> = useParams();
  const todoService = useTodos();

  const handleSubmit = (text: string) => {
    if (params.listName) {
      todoService.addTodo(text, params.listName as string);
    }
  };

  return (
    <div>
      <div className="d-flex align-items-center mb-3 gap-3">
        <TodoCreateForm onSubmit={handleSubmit} />
        <button
          className="btn btn-primary mb-3"
          onClick={todoService.clearCompleteTodos}
        >
          {TODOS.CLEAR}
        </button>
      </div>

      <TodoList
        todos={todoService.getTodosByListName(params.listName as string)}
        onToggleTodo={todoService.toggleTodo}
        onRemoveTodo={todoService.removeTodo}
      />
    </div>
  );
};

export default TodoPage;
