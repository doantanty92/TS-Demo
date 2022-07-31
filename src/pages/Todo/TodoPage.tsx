import React, { useEffect, useState } from 'react'
import { TodoList } from './TodoList'
import { useLocalStorage } from '../../helper/useLocalStorage'
import './TodoPage.scss'

const initialTodoList: Todo[] = []

export const TodoPage: React.FC = () => {
  const [todoList, setTodoList] = useState(initialTodoList)
  const [localStorage, setLocalStorage] = useLocalStorage('todo', '')

  useEffect(() => {
    if (localStorage) {
      const todoList = localStorage.sort((a: Todo, b: Todo) =>
        a.complete === b.complete ? a.time - b.time : a.complete ? 1 : -1
      )
      setTodoList(todoList)
    }
  }, [localStorage])

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodoList = todoList.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        }
      }
      return todo
    })
    setLocalStorage(newTodoList)
  }

  const removeTodo = (selectedTodo: Todo) => {
    const newTodoList = todoList.filter((todo) => todo !== selectedTodo)
    setLocalStorage(newTodoList)
  }

  const addTodo: AddTodo = (text: string) => {
    const isExists = todoList.some((todo) => todo.text === text)
    if (isExists) {
      console.log('Todo is exits')
    } else {
      const newTodo = { time: new Date().getTime(), text, complete: false }
      setTodoList([...todoList, newTodo])
      setLocalStorage([...todoList, newTodo])
    }
  }

  return (
    <div className="container-fluid">
      <TodoList
        todoList={todoList}
        toggleTodo={toggleTodo}
        addTodo={addTodo}
        removeTodo={removeTodo}
      />
    </div>
  )
}
