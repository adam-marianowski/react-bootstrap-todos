import { FunctionComponent } from "react";
import { Todo } from "../types/Todo";

type Props = {
  todo: Todo;
  onRemoveTodo: (id: string) => void;
  onToggleTodo: (selectedTodo: Todo) => void;
};

const TodoItem: FunctionComponent<Props> = (props) => {
  return (
    <li className="list-group-item d-flex">
      <div className="form-check">
        <input
          id={`checkbox-${props.todo.id}`}
          type="checkbox"
          className="form-check-input"
          checked={props.todo.complete}
          onChange={() => props.onToggleTodo(props.todo)}
        />
        <label
          htmlFor={`checkbox-${props.todo.id}`}
          className="form-check-label"
        >
          {props.todo.text}
        </label>
      </div>

      <div className="badge bg-primary me-4 ms-auto d-flex align-items-center">
        {props.todo.listName}
      </div>
      <button
        className=" btn btn-danger btn-sm"
        onClick={() => props.onRemoveTodo(props.todo.id)}
        title="Remove Todo"
      >
        <i className="bi bi-trash"></i>
      </button>
    </li>
  );
};

export default TodoItem;
