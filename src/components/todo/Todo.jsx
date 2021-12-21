import React from 'react'
import s from '../todo/todo.module.css'

const Todo = ({ todo }) => {
    const data = new Date().toISOString().slice(0, 10)
    console.log(data)
    return (
        <div className={s.todoList}>
            <li onClick={(e) => console.log(todo)} className={s.list} >
                {todo}
            </li>
            <p>
                {data}
            </p>
            <input type='checkbox' name="" onChange={(e) => console.log(e.target.value)} id="" />

        </div>
    )
}

export default Todo
