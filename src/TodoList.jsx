import React from 'react'
import styles from '../css/TodoList.module.css'


import {
  Checkbox,
  Divider,
  Text
} from "@fluentui/react-components"

export default function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.todolist}>
      <Divider appearance='brand'>Todo list</Divider>

      <div className={styles.todos}>
        {todos.length > 0 ? todos.map(todo => <Checkbox className={todo.isCompleted ? styles.iscompleted : ''}
          id={todo.id} label={todo.text} checked={todo.isCompleted}
          onChange={e => setTodos(oldTodos => oldTodos.map(oldTodo => oldTodo.id === e.target.id ?
            { id: oldTodo.id, text: oldTodo.text, isCompleted: e.target.checked } : oldTodo))} />)
          : <Text size={800}>No todos yet...</Text>}
      </div>

    </div>
  )
}
