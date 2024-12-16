import { FunctionComponent } from "react";
import TodoCreateForm from "./TodoCreateForm";
import TodoList from "./TodoList";
import useTodos from "../hooks/useTodos";
import { TODOS } from "utilities/localization";

const TodoPage: FunctionComponent = () => {
  const todoService = useTodos();

  return (
    <div>
      <div className="d-flex align-items-center mb-3 gap-3">
        <TodoCreateForm onSubmit={todoService.addTodo} />
        <button
          className="btn btn-primary mb-3"
          onClick={todoService.clearCompleteTodos}
        >
          {TODOS.CLEAR}
        </button>
      </div>

      <TodoList
        todos={todoService.todos}
        onToggleTodo={todoService.toggleTodo}
        onRemoveTodo={todoService.removeTodo}
      />
    </div>
  );
};

export default TodoPage;
