import React from 'react'
import { convertTimestampToDateTime } from '../../utils/formatDate'

interface Props {
  todo: Todo
  toggleTodo: ToggleTodo
  index: number
  removeTodo: RemoveTodo
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li className="border-0 fs-5 text-capitalize mb-3 todo-list-item">
      <label
        className={`btn btn ${todo.complete ? ' btn-outline-danger' : ' btn-warning'}`}
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input
          type="checkbox"
          className="btn-check"
          checked={todo.complete}
          readOnly
          onClick={() => {
            toggleTodo(todo)
          }}
        />
        <span>
          ({convertTimestampToDateTime(todo.time)}) - {todo.text}
        </span>
      </label>
      {todo.complete && (
        <button type="button" className="ms-2 btn btn-link-danger" onClick={() => removeTodo(todo)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      )}
    </li>
  )
}
