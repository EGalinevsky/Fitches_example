import React, { useState } from 'react'
import s from '../input/input.module.css'
import Todo from '../todo/Todo'

const Input = () => {
    const [click, setClick] = useState('')
    const [todos, setTodos] = useState([])
    const sendInput = 'send'
    const disableBTN = true

    const handlAddArray = () => {
        setTodos([...todos, { title: click, date: new Date().toISOString().slice(11, 19), id: todos.length + 1, checked: false }])
        setClick('')
    }
    console.log(todos)
    return (
        <div className={s.block_input}>
            <input onChange={(e) => setClick(e.target.value)} placeholder='Enter any text' className={s.input_text} type="text" value={click} />
            <div>
                <button
                    onClick={handlAddArray}
                    disabled={click ? '' : disableBTN}
                    className={s.btnSend}>
                    {sendInput}
                </button>
            </div>
            {todos.length ? <ul className={s.list__item}>
                {todos.map((todo, i) => <Todo key={i} title={todo.title} id={todo.id} date={todo.date} checked={todo.checked} />)}
            </ul> : ''}

        </div>
    )
}

export default Input
