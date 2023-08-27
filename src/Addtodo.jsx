import React from 'react'
import { useState } from 'react'
import styles from '../css/Addtodo.module.css'

import {
    Label,
    Input,
    Button

} from "@fluentui/react-components"

export default function Addtodo({ setTodos }) {
    const [todo, setTodo] = useState('')

    const handleAddTodo = (e) => {
        e.preventDefault()
        setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(36), isCompleted: false, text: todo }])
        setTodo('')
    }

    return (
        <form onSubmit={handleAddTodo} className={styles.form}>
            <Label htmlFor="newtodo" >Add a new todo</Label>
            <Input id="newtodo" value={todo} onChange={e => setTodo(e.target.value)} />
            <Button type='submit' appearance='primary' style={{ marginTop: 16 }}>Add todo</Button>
        </form>
    )
}
