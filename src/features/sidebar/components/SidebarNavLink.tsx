import { TodoList } from "features/todoLists/types/todoList";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "utilities/constants";

type Props = { todoList: TodoList };

const SidebarNavLink: FunctionComponent<Props> = (props) => {
  return (
    <li className="nav-item">
      <NavLink
        to={ROUTES.getTodoListRoute(props.todoList.id)}
        className="nav-link"
        aria-current="page"
      >
        <i className={`bi bi-${props.todoList.icon}`}></i>
        <span className="ms-2">{props.todoList.name}</span>
      </NavLink>
    </li>
  );
};

export default SidebarNavLink;
