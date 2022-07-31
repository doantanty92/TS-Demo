import React, { useState } from 'react'
import { TodoListItem } from './TodoListItem'

interface Props {
  todoList: Todo[]
  toggleTodo: ToggleTodo
  addTodo: AddTodo
  removeTodo: RemoveTodo
}

export const TodoList: React.FC<Props> = ({ todoList, toggleTodo, addTodo, removeTodo }) => {
  const [text, setText] = useState('')

  const handleAddTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!!text) {
      addTodo(text)
      setText('')
    }
  }
  return (
    <>
      <form className="row">
        <div className="col-sm-6 mx-auto bg-white rounded-4 py-3 my-3">
          <div className="input-group mb-3 d-flex gap-4 todo-label">
            <input
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value)
              }}
              className="form-control shadow-none text-capitalize"
              placeholder="Enter New Task"
            />
            <button
              type="submit"
              onClick={handleAddTodo}
              className="btn btn-warning px-3 fw-bold shadow-none"
            >
              Add Todo
            </button>
          </div>
          <ul className="d-flex flex-column list-unstyled">
            {todoList.map((todo, index) => (
              <TodoListItem
                key={todo.text}
                index={index}
                todo={todo}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
              />
            ))}
          </ul>
        </div>
      </form>
    </>
  )
}
