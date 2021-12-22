import React, { useState } from 'react'
import s from '../todo/todo.module.css'

const Todo = ({ title, date, id, checked }) => {
    const [check, setCheck] = useState(checked)
    // const data = new Date().toISOString().slice(0, 10)
    // console.log(data)
    // console.log(check)
    return (
        <div onClick={() => setCheck(!check)} className={s.todoList}>
            <li onClick={(e) => console.log(title)} className={s.list} >
                {title}
            </li>
            <p>
                {date}
            </p>
            <input type='checkbox' name="" checked={check} onChange={(e) => setCheck(!check)} id="" />

        </div>
    )
}

export default Todo
