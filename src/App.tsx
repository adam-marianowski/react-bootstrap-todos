import { FunctionComponent } from "react";
import TodoPage from "./features/todos/components/TodoPage.tsx";

const App: FunctionComponent = () => {
  return (
    <div className="container my-5 flex flex-column">
      <TodoPage />
    </div>
  );
};

export default App;
