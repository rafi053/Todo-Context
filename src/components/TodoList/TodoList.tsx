import React, { useEffect, useState } from "react";
import "./TodoList.css";
import TodoForm from "../TodoForm/TodoForm";
import BasicSpinner from "../BasicSpinner/BasicSpinner";
import axios from "axios";
import TodoItem from "../TodoItem/TodoItem";
import { useGlobalTodo } from "../../context/TodoContext";
const BASE_URL = `${import.meta.env.VITE_API_URL}/Todos`;


const TodoList: React.FC = () => {
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
