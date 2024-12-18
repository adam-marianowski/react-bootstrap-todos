export const ROUTES = {
  HOME: "/",
  TODOS: "/todos",
  TODOS_LIST: "/todos/:listName",

  getTodoListRoute: (list: string) => `/todos/${list}`,
};
