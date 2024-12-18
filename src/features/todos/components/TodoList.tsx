import { FunctionComponent, useState, memo } from "react";
import { Todo } from "features/todos/types/Todo";
import { TODOS } from "utilities/localization";

type Props = {
  todos: Todo[];
  onToggleTodo: (selectedTodo: Todo) => void;
  onRemoveTodo: (id: string) => void;
  onEditTodo: (id: string, newText: string) => void;
};

const ITEMS_PER_PAGE = 7; // Number of items to show per page

const TodoList: FunctionComponent<Props> = memo((props) => {
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(props.todos.length / ITEMS_PER_PAGE);

  const handleEditClick = (todo: Todo) => {
    setEditingTodoId(todo.id);
    setEditingText(todo.text);
  };

  const handleSaveClick = () => {
    if (editingTodoId && editingText.trim()) {
      props.onEditTodo(editingTodoId, editingText.trim());
    }
    setEditingTodoId(null);
    setEditingText("");
  };

  const handleCancelClick = () => {
    setEditingTodoId(null);
    setEditingText("");
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const getCurrentPageTodos = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return props.todos.slice(startIndex, endIndex);
  };

  if (props.todos.length === 0) {
    return (
      <div className="d-flex mt-5 flex-column align-items-center">
        <img src="/assets/undraw-floating.svg" className="w-25" alt="" />
        <h3 className="text-muted mt-3">{TODOS.NO_TODOS}</h3>
        <p className="text-muted">{TODOS.ADD_TODO_START}</p>
      </div>
    );
  }

  return (
    <div>
      <ul className="list-group">
        {getCurrentPageTodos().map((todo) => (
          <li key={todo.id} className="list-group-item d-flex align-items-center">
            <div className="form-check">
              <input
                id={`checkbox-${todo.id}`}
                type="checkbox"
                className="form-check-input"
                checked={todo.complete}
                onChange={() => props.onToggleTodo(todo)}
              />
              {editingTodoId === todo.id ? (
                <input
                  type="text"
                  className="form-control ms-2"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
              ) : (
                <label
                  htmlFor={`checkbox-${todo.id}`}
                  className={`form-check-label ms-2 ${todo.complete ? "text-decoration-line-through" : ""
                    }`}
                >
                  {todo.text}
                </label>
              )}
            </div>
            <div className="ms-auto d-flex gap-2">
              {editingTodoId === todo.id ? (
                <>
                  <button
                    className="btn btn-sm btn-success"
                    onClick={handleSaveClick}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => handleEditClick(todo)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => props.onRemoveTodo(todo.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <button
          className="btn btn-secondary"
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-secondary"
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
});

export default TodoList;
