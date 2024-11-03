import "./TodoList.css";
import BasicSpinner from "../BasicSpinner/BasicSpinner";
import TodoItem from "../TodoItem/TodoItem";
import { useGlobalTodo } from "../../context/TodoContext";
import { FC } from "react";


const TodoList:FC = () => {
 const {todos, isLoading, deleteTodo, toggleCompletion} = useGlobalTodo();

  return (
    <div className="todo-list">
      <h1>ToDo List</h1>
      
      <ul>
        {
        isLoading ? (
          <BasicSpinner />
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              deleteTodo={deleteTodo}
              todo={todo}
              toggleCompletion={toggleCompletion}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
