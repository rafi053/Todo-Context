import  { FC } from 'react'
import './TodoPage.css' 
import TodoList from '../TodoList/TodoList'
import TodoForm from '../TodoForm/TodoForm'


const TodoPage:FC = () => {
  return (
    <div>
      <TodoForm/>
      <TodoList/>
    </div>
  )
}

export default TodoPage;
