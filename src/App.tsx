import { FunctionComponent } from "react";
import TodoPage from "components/TodoPage";

const App: FunctionComponent = () => {
  return (
    <div className="container my-5 flex flex-column">
      <TodoPage />
    </div>
  );
};

export default App;
