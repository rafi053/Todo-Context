import { FC } from "react";
import "./App.css";
import TodoPage from "./components/TodoPage/TodoPage";
import { TodoProvider } from "./context/TodoContext";

const App: FC = () => {
  return (
    <div className="app">
      <TodoProvider>
        <TodoPage />
      </TodoProvider>
    </div>
  );
};

export default App;
