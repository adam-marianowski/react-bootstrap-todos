export const ROUTES = {
  HOME: "/",
  TODOS: "/todos",
  TODOS_LIST: "/todos/:list",

  getTodoListRoute: (list: string) => `/todos/${list}`,
};
