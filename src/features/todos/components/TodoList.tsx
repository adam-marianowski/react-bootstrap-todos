import { FunctionComponent } from "react";
import { Todo } from "features/todos/types/Todo";
import { TODOS } from "utilities/localization";
import TodoItem from "./TodoItem";

type Props = {
  todos: Todo[];
  onToggleTodo: (selectedTodo: Todo) => void;
  onRemoveTodo: (id: string) => void;
};

const TodoList: FunctionComponent<Props> = (props) => {
  if (props.todos.length === 0) {
    return (
      <div className="d-flex mt-5 flex-column align-items-center">
        <img
          src="/assets/undraw-floating.svg"
          className="w-25"
          alt="floating-undraw-image"
        />
        <h3 className="text-muted mt-3">{TODOS.NO_TODOS}</h3>
        <p className="text-muted">{TODOS.ADD_TODO_START}</p>
      </div>
    );
  }

  return (
    <ul className="list-group">
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemoveTodo={props.onRemoveTodo}
          onToggleTodo={props.onToggleTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
